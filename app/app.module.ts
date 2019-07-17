import { NgModule }  from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ CommonModule, BrowserModule, FormsModule],
  bootstrap: [ AppComponent ]
})

export class AppModule { }