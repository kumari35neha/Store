import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <nav [ngClass] = "'menu'">
    <ul>
      <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
      
    </ul>
  </nav>
  <div [ngClass]="'parent-container'">
    <router-outlet></router-outlet>
  </div>
  `
  
})
export class AppComponent {
  
}
