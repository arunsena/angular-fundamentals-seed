import { Component, OnInit } from '@angular/core';
import { Passenger } from '../passenger-dashboard/models/passenger.interface'

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
    constructor(){}
    ngOnInit(){
        this.passengers = [
            {
                id: 0,
                fullname: 'John Doe',
                checkedIn: true,
                checkInDate: 1563676902303
            },
            {
                id: 1,
                fullname: 'Mary Fisher',
                checkedIn: false,
                checkInDate: 1562208159257
            },
            {
                id: 2,
                fullname: 'Jim Kirk',
                checkedIn: true,
                checkInDate: 1563676902303
            },
            {
                id: 3,
                fullname: 'James Douglas',
                checkedIn: false,
                checkInDate: 1562208159257
            },
            {
                id: 4,
                fullname: 'Sam Adams',
                checkedIn: true,
                checkInDate: 1563676902303
            }
        ]
    }
    handleRemove(event){
        this.passengers = this.passengers.filter((passenger:Passenger)=> passenger.id !== event.id);
    }
    handleEdit(event){
        this.passengers = this.passengers.map((passenger:Passenger)=> {
            if(passenger.id === event.id){
                passenger = Object.assign({}, passenger, event);
            }
            return passenger;
        });
        console.log(this.passengers);
    }
}