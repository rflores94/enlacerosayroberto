import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrl: './transporte.component.css'
})
export class TransporteComponent {
  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
