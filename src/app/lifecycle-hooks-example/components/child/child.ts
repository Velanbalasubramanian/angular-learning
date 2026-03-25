import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges, viewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  // ngOnChange method used this
  @Input() items: any[] = [];
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

  // ngAfterViewInit method (focus the input once view initialized)
  nameInput = viewChild<ElementRef>('nameInput');

  ngAfterViewInit(): void {
    this.nameInput()?.nativeElement.focus();
    console.log('Input focused')
  }

  // ngDestroy method
  counter = signal(0);

  private intervalId: any;

  // Starts the timer
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.counter.update(value => value + 1);
    }, 1000)
    console.log('Interval ID', this.intervalId)
  }

  // Clear the timer
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('Ondestroy timer stopped')
  }
}
