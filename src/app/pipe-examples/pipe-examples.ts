import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  imports: [CommonModule],
  templateUrl: './pipe-examples.html',
  styleUrl: './pipe-examples.css',
})
export class PipeExamples {
  toDate = new Date();
  items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5']
  price = 340;
}
