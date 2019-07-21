import { NgModule }  from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ CommonModule, BrowserModule, FormsModule, PassengerDashboardModule],
  bootstrap: [ AppComponent ]
})

export class AppModule { }