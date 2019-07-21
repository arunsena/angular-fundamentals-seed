import { Component } from '@angular/core';
import { Passenger } from '../passenger-dashboard/models/passenger.interface'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.scss'],
    template: `<div> 
        <h3>Airline Passengers</h3>
        <ul>
            <li *ngFor="let passenger of passengers; let i =index"> 
                <span class="status" [class.checked-in]="passenger.checkedIn"></span>
                {{i}}: {{passenger.fullname}}
                <div class="sub-text"> 
                    Check in date: {{passenger.checkInDate ? (passenger.checkInDate| date: 'yMMMd') : ''}}
                </div>
            </li>
        </ul>
    </div>`
})

export class PassengerDashboardComponent{
    passengers: Passenger[] =[
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
            checkInDate: 1562208159257
        }
    ]
}