import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title = 'Bienvenidos a nuestra web de boda.';
  date = '7 de diciembre del 2024';

  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
