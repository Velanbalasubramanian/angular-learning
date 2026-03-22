import { CommonModule } from '@angular/common';
import { Component, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../../services/car';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  carName: string = '';

  // Using Decorator
  //  carAdded = output<string>();

  constructor(private car: Car) {

  }


  onSubmit() {
    console.log(this.carName);
    // Sending the value outside
    // this.carAdded.emit(this.carName);
    // this.carName = '';
    // Sending the value using car service
    this.car.addCarName(this.carName);
    this.carName = '';
  }
}
