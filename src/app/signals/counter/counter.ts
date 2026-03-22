import { Component, Signal, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);
  increment() {
    this.count.set(this.count() + 1);
  }
  decrement() {
    if (this.count() > 0) {
      this.count.set(this.count() - 1);
    }
  }
  doubleCount: Signal<number> = computed(() => this.count() * 2);
}
