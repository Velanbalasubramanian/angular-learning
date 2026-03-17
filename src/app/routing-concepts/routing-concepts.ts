import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-concepts',
  imports: [],
  templateUrl: './routing-concepts.html',
  styleUrl: './routing-concepts.css',
})
export class RoutingConcepts {
  routeConfigCode = `import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];`;

  routerOutletCode = `<router-outlet></router-outlet>`;

  activatedRouteCode = `import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log(id); // Output: 10
}`;

  navigateByUrlCode = `this.router.navigateByUrl('/home');`;

  navigateCode = `this.router.navigate(['product', 10]);`;

  productConfigCode = `{ path: 'product/:id', component: ProductComponent }`;

  productUrlCode = `/product/10`;
}
