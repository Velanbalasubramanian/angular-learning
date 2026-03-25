import { AfterContentInit, Component, ContentChildren, DoCheck, ElementRef, OnInit, QueryList } from '@angular/core';
import { Child } from './components/child/child';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-hooks-example',
  imports: [Child, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './lifecycle-hooks-example.html',
  styleUrl: './lifecycle-hooks-example.css',
})
export class LifecycleHooksExample implements OnInit, DoCheck, AfterContentInit {
  itemList = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
    { id: 5, name: 'Jack' },
  ]

  title = 'Hello';
  message: string = '';
  prevMessage = '';

  // ngOnInit method
  ngOnInit(): void {
    this.message = 'Welcome to our angular hooks';
  }


  // updateMessage method
  updateMessage(): void {
    this.message = 'Message updated! New value: ' + this.title;
  }

  // ngDoCheck method
  ngDoCheck(): void {
    if (this.message !== this.prevMessage) {
      console.log('Message property changed value', this.message);
      this.prevMessage = this.message;
    }
  }

  // ngAfterContentInit method
  @ContentChildren('messageContent') messageElements!: QueryList<ElementRef>;
  ngAfterContentInit(): void {
    this.messageElements.forEach(element => {
      console.log('projected content', element.nativeElement.textContent)
    })
  }

  // ngDestroy method
  showHello = true;
}
