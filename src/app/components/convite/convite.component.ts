import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-convite',
  templateUrl: './convite.component.html',
  styleUrl: './convite.component.css'
})
export class ConviteComponent  implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
