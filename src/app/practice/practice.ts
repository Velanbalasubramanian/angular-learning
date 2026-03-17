import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBinding } from '../data-binding/data-binding';
import { RoutingConcepts } from '../routing-concepts/routing-concepts';

@Component({
    selector: 'app-practice',
    standalone: true,
    imports: [CommonModule, DataBinding, RoutingConcepts],
    templateUrl: './practice.html',
    styleUrl: './practice.css'
})
export class PracticeComponent {
    activeTab: 'data-binding' | 'routing' = 'data-binding';
    demoData = 'Initial Data';

    updateDemoData() {
        this.demoData = 'Updated Data ' + new Date().toLocaleTimeString();
    }
}
