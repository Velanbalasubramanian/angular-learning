import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding implements OnInit {

  // Oneway Data Binding and String Interpolition
  title = 'One Way Data Binding';

  ngOnInit(): void {
    console.log(this.title);
    console.log(this.propertyBinding);

    this.User = {
      name: 'Gayle',
      age: 30
    }
  }

  // Twoway Data Binding
  fullName = "Sachin Tendulkar"

  // Function with data binding
  getName() {
    return ('Ganguly')
  }

  //  attribute data binding and Oneway Data Binding
  imgurl = "https://picsum.photos/id/237/200/300"
  imgalt = "attribute data binding"

//  Property Binding
  propertyBinding = 'Hello World - Property binding'

  // Propery Binding With safe navigation operator
  User:any = null;

  // Event Binding
  count = 0;
  clickMe() {
    this.count++;
  }
  clickMeDecrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
