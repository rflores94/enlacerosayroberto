import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-regalo',
  templateUrl: './regalo.component.html',
  styleUrl: './regalo.component.css'
})
export class RegaloComponent {
  cuenta: string = "ES19 1563 2626 3532 6488 7534";

  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
