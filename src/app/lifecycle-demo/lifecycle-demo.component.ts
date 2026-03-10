import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
  Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  template: `
    <div style="border: 2px solid #ccc; padding: 10px; margin: 10px; border-radius: 8px;">
      <h3>Lifecycle Demo Component</h3>
      <p>Data from parent: <strong>{{ data }}</strong></p>
      <p>Check the browser console to see the lifecycle hooks execution order.</p>
    </div>
  `,
  styles: []
})
export class LifecycleDemoComponent implements
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  @Input() data: string = '';

  constructor() {
    console.log('Constructor: Component instance created.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input properties changed.', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized.');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection running.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Projected content initialized.');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Projected content checked.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Component view initialized.');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: Component view checked.');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component being destroyed.');
  }
}
