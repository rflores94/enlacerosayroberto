import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrl: './asistencia.component.css'
})
export class AsistenciaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
