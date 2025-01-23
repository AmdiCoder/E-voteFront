import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,  // Si tu veux utiliser un composant standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {  // Assure-toi que la classe est nommée 'HomeComponent'
  title = 'eVote';
}

