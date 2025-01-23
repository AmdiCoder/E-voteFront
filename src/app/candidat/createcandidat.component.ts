import { Component } from '@angular/core';
import {CandidatService} from '../services/candidat.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-createcandidat',
  imports: [
    FormsModule
  ],
  templateUrl: './createcandidat.component.html',
  styleUrl: './createcandidat.component.css'
})
export class CreatecandidatComponent {

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  candidat = {prenom: "", nom: "",dateNaissance: "", sexe: "", numeroCarte: "", telephone: "", parti:"" , programme: "", biographie: "", username: "", email: "", motDePasse: ""};

  constructor(public candidatService: CandidatService) { }

  onSubmit():void {
    const formattedDate = this.formatDate(this.candidat.dateNaissance); // Convertit la date
    this.candidat.dateNaissance = formattedDate;

    this.candidatService.createCandidat(this.candidat).subscribe({
      next: response => {
        alert("Candidat inscrit avec succès!");
        this.candidat = {
          prenom: "",
          nom: "",
          dateNaissance: "",
          sexe: "",
          numeroCarte: "",
          telephone: "",
          parti: "",
          programme: "",
          biographie: "",
          username: "",
          email: "",
          motDePasse: ""
        };
      },  error: (error) =>{
          console.error(error);
          alert("Erreur lors de l'inscription du candidat.");
        },
    });
  }
}

