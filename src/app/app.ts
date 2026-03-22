import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LifecycleHooksExample } from './lifecycle-hooks-example/lifecycle-hooks-example';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LifecycleHooksExample, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Lifecycle Hooks';
  demoData = signal('Initial Data');
  showDemo = signal(true);

  updateData() {
    this.demoData.set('Updated Data: ' + Math.random().toString(36).substring(7));
  }

  toggleDemo() {
    this.showDemo.update(val => !val);
  }
}
