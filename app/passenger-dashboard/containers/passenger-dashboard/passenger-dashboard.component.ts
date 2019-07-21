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
                fullname: 'John Doe',
                checkedIn: true,
                checkInDate: 1563676902303
            },
            {
                fullname: 'Mary Fisher',
                checkedIn: false,
                checkInDate: 1562208159257
            },
            {
                fullname: 'Jim Kirk',
                checkedIn: true,
                checkInDate: 1563676902303
            },
            {
                fullname: 'James Douglas',
                checkedIn: false,
                checkInDate: 1562208159257
            },
            {
                fullname: 'Sam Adams',
                checkedIn: true,
                checkInDate: 1563676902303
            }
        ]
    }
    handleRemove(event){
       // this.passengers.filter((passenger:Passenger)=> passenger)
       console.log(event);
    }
    handleEdit(event){
        // this.passengers.filter((passenger:Passenger)=> passenger)
        console.log(event);
     }
}