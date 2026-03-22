import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { RoutingConcepts } from './routing-concepts/routing-concepts';
import { PracticeComponent } from './practice/practice';
import { Counter } from './signals/counter/counter';
import { Directives } from './directives-examples/directives';
import { PipeExamples } from './pipe-examples/pipe-examples';
import { SharingDataComponent } from './sharing-data-btw-component/sharing-data-component';
import { LifecycleHooksExample } from './lifecycle-hooks-example/lifecycle-hooks-example';

export const routes: Routes = [
    { path: 'data-binding', component: DataBinding },
    { path: 'routing-concepts', component: RoutingConcepts },
    { path: 'practice', component: PracticeComponent },
    { path: 'counter', component: Counter },
    { path: 'directives', component: Directives },
    { path: 'pipe-examples', component: PipeExamples },
    { path: 'sharing-data', component: SharingDataComponent },
    { path: 'lifecycle-demo', component: LifecycleHooksExample }
];
