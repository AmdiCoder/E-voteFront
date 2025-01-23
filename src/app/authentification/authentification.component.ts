import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from 'express';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-authentification',
  imports: [
    RouterLink,
    RouterOutlet,
    NgIf,
    FormsModule
  ],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {
  authData = {
    email: '',
    password:''
  };
  error: string | null = null;

  constructor(private authentificationService: AuthentificationService, private router: Router) {}
/**
  onSubmit(): void {
    this.authentificationService.login(this.authData).subscribe({
      next: (response: any) => {
        console.log('Connexion reussie',response);
        this.router.navigate(['dashboard']);
      },
      error: (error:any)=> {
        console.error(error);
        this.error = "Erreur de conneion. Verifiez vos identifiants.";
      }
    });
  }
    */
}
