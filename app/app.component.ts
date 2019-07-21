import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `<div> 
    <passenger-dashboard></passenger-dashboard>
  </div>`
})
export class AppComponent {
  title: string;
  constructor(){
    this.title = 'Tile from constructor function';
  }
  clickValue(value: any){
    this.title = value.value;
  }
}