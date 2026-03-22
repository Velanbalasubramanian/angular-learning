import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges {

   // ngOnChange method used this
  @Input() items:any[] = [];
  @Input() title = '';

  // ngOnChange method
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      console.log('Items Property Changed', changes['items']); 
    }
    if (changes['title']) {
      console.log('Title Property Changed', changes['title'].firstChange); 
    }
  }
}
