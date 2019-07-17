import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `<div class="app"> 
    <h1 [innerHTML]= "title"></h1> 
    <input type="text" #inputVal>
    <button class="btn" (click)="clickValue(inputVal)">
            Get value <span class="badge badge-primary"></span>
    </button>
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