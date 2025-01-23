import {Component, OnInit} from '@angular/core';
import {CandidatService} from '../services/candidat.service';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-candidat',
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './candidat.component.html',
  styleUrl: './candidat.component.css'
})
export class CandidatComponent implements OnInit {
  candidats: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private candidatService: CandidatService) {
  }

  ngOnInit(): void {

    this.getCandidats();
  }

  getCandidats(): void {
    this.candidatService.getCandidats().subscribe({
      next: (data: any[]) => {
    this.candidats = data;
    this.loading = false;
  },
  error: (error: any) => {
    console.error(error);
    this.error = "Erreur lors de la récuperation des candidats";
    this.loading = false;
          },
    });
  }
  deleteCandidat(id:number):void {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')){
      this.candidatService.deleteCandidat(id).subscribe({
        next: () => {
          this.candidats = this.candidats
              .filter(candidat =>candidat.id !== id);
          alert('Suppression reussi')
        },
        error: (error: any) => {
          console.error(error);
          alert('Erreur lors de la suppression du candidat');
               }
          })
        }
      }
    }
