import { NgModule }  from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  declarations: [ AppComponent, HomeComponent, NotFoundComponent ],
  imports: [ CommonModule, BrowserModule, FormsModule, PassengerDashboardModule, RouterModule.forRoot(routes, {useHash: true})],
  bootstrap: [ AppComponent ]
})

export class AppModule { }