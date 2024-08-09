import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Bienvenidos a la historia de nuestra boda!';
  subtitle = 'A continuación os contaremos más cosas sobre este día tan importante para nosotros.'
}
