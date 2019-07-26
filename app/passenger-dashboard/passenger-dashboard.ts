import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

import { PassengerDashboardService } from './passenger-dashboard.service'
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        PassengerDashboardComponent,
        PassengerViewerComponent,
        PassengerCountComponent,
        PassengerDetailsComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    exports:[
        PassengerViewerComponent
    ],
    providers:[
        PassengerDashboardService
    ]
})

export class PassengerDashboardModule{}