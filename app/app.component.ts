import { Component} from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `<div class="app">
    <nav class="nav">
      <a *ngFor="let item of nav" 
        [routerLink]="item.link" 
        routerLinkActive="active" 
        [routerLinkActiveOptions]="{ exact: item.exact}"> 
        {{item.name}} 
      </a>
    </nav>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title: string;
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: true
    },
    {
      link: '/oops',
      name: 'Error',
      exact: false
    }
  ];
  constructor(){
    this.title = 'Tile from constructor function';
  }
  clickValue(value: any){
    this.title = value.value;
  }
}