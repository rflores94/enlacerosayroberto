import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ceremonia',
  templateUrl: './ceremonia.component.html',
  styleUrl: './ceremonia.component.css'
})
export class CeremoniaComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
