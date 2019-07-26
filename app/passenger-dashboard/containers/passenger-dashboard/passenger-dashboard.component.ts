import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'

import { PassengerDashboardService } from '../../passenger-dashboard.service'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.scss'],
    template: `<div>
        <passenger-count 
            [items]="passengers">
        </passenger-count>
        <hr />
        <passenger-details
            *ngFor="let passenger of passengers"
            [detail]="passenger"
            (edit)="handleEdit($event)"
            (remove)="handleRemove($event)">
        </passenger-details>
    </div>`
})

export class PassengerDashboardComponent implements OnInit{
    passengers: Passenger[];
    constructor(private passengerService: PassengerDashboardService){}
    ngOnInit(){
        this.passengerService.getPassengers().subscribe((data: Passenger[])=> this.passengers = data);
    }
    handleRemove(event){
        this.passengerService.removePassenger(event).subscribe((data: Passenger) =>{
            this.passengers = this.passengers.filter((passenger:Passenger)=> passenger.id !== event.id);
        })
    }
    handleEdit(event){
        this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
            this.passengers = this.passengers.map((passenger:Passenger)=> {
                if(passenger.id === event.id){
                    passenger = Object.assign({}, passenger, event);
                }
                return passenger;
            });
        });
    }
}