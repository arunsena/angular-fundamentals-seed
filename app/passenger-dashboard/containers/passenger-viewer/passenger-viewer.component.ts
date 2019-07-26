import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls:['passenger-viewer.scss'],
    template: `
        <passenger-form [details]="passenger" (update)="onUpdatePassenger($event)"></passenger-form>
    `
})

export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;
    constructor ( private passengerService: PassengerDashboardService){

    }

    ngOnInit(){
        this.passengerService
        .getPassengers(0)
        .subscribe((data: Passenger) => this.passenger = data);
    }
    onUpdatePassenger(data: Passenger){
        this.passengerService.updatePassenger(data)
        .subscribe((data: Passenger)=>{
            this.passenger = Object.assign({}, this.passenger, data);
        });
    }
}

