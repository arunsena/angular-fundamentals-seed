import { Component, Input } from '@angular/core';
import { Passenger } from '../../containers/passenger-dashboard/models/passenger.interface'

@Component({
    selector: 'passenger-count',
    template:`
        <h3>Airline Passengers</h3>
        <hr />
        <div>
            Total Passengers: {{items.length}}
        </div>
        <div>
            CheckedIn Passengers: {{checkedInCount()}}/{{items.length}}
        </div>
    `
})
export class PassengerCountComponent{
    @Input()
    items: Passenger[];
    constructor(){}
    checkedInCount(){
        if(!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}