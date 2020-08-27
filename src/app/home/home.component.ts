import { Component } from '@angular/core';


@Component({
  
  template:`
  <h2>Welcome to Home</h2>
  <a [routerLink]="['list']" routerLinkActive = "active">View Home List</a>
  <router-outlet></router-outlet>
  `

})
export class HomeComponent {

  

}
