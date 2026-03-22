import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HighlightDirctives } from './custom-directives/highlight-dirctives';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule, HighlightDirctives],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  // ngFor Example
  movies = ['Batman', 'Superman', 'X-man', 'Final desination', 'Zootopia',]

  // Index 
  fruits = ['Apple', 'Banana', 'Cherry', 'Date']

  // ngIf Example
  showMe = true;
  applyRed = false;
}

