import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Form } from "./components/form/form";
import { List } from "./components/list/list";

@Component({
  selector: 'app-sharing-data-component',
  imports: [CommonModule, FormsModule, Form, List],
  standalone: true,
  templateUrl: './sharing-data-component.html',
  styleUrl: './sharing-data-component.css',
})
export class SharingDataComponent {

  // carNames: string[] = [];
  // oncarAdded(carName: string) {
  //   console.log(carName, 'From App');
  //   this.carNames.push(carName);
  // }
}
