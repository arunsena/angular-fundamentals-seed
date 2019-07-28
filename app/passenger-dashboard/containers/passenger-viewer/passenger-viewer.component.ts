import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'passenger-viewer',
    styleUrls:['passenger-viewer.scss'],
    template: `
        <button (click)= "goBack()" class="btn">
                Go back! <span class="badge badge-primary"></span>
        </button>
        <passenger-form 
            [details]="passenger" 
            (update)="onUpdatePassenger($event)">
        </passenger-form>
    `
})

export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;
    constructor ( 
        private passengerService: PassengerDashboardService,
        private router: Router,
        private route: ActivatedRoute
    ){}

    ngOnInit(){
        this.route.params
        .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))        
        .subscribe((data: Passenger) => this.passenger = data);
    }
    onUpdatePassenger(data: Passenger){
        this.passengerService.updatePassenger(data)
        .subscribe((data: Passenger)=>{
            this.passenger = Object.assign({}, this.passenger, data);
        });
    }

    goBack(){
        this.router.navigate(['/passengers']);
    }
}

