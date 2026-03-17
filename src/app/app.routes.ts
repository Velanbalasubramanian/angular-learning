import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { RoutingConcepts } from './routing-concepts/routing-concepts';
import { PracticeComponent } from './practice/practice';

export const routes: Routes = [
    { path: 'data-binding', component: DataBinding },
    { path: 'routing-concepts', component: RoutingConcepts },
    { path: 'practice', component: PracticeComponent }
];
