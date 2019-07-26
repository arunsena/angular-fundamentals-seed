import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector:'passenger-form',
    styleUrls: ['passenger-form.scss'],
    template:
    ` 
    <h3>Passenger Form Component</h3>
    <form #form="ngForm" novalidate (ngSubmit)="handleSubmit(form.value, form.valid)">
        <div>
            Passenger name:
            <input type="text" 
            name="fullname"
            required
            #fullName="ngModel"
            [ngModel]="details?.fullname">
            <div class="error" *ngIf="fullName.errors?.required && fullName.dirty">
                Passenger name is required!
            </div>
        </div>

        <div>
            Passenger ID:
            <input type="number" 
            name="id"
            #id="ngModel"
            required
            [ngModel]="details?.id">
            <div class="error" *ngIf="id.errors?.required && fullName.dirty">
                Passenger id is required!
            </div>
        </div>

        <div>
            Passenger CheckedIn:
            <label for="checkedIn">
                <input type="checkbox"
                name="checkedIn"
                [ngModel]="details?.checkedIn"
                (ngModelChange)="toggleCheckIn($event)">
            </label>
        </div>

        <div>
            Luggage:
            <select name="baggage" [ngModel]="details?.baggage">
                <option *ngFor="let item of baggage" [value]="item.key"
                    [selected]="item.key === details?.baggage">
                    {{item.value}}
                </option>
            </select>
        </div>
       <!-- <div>
            Passenger CheckedIn:
            <label for="checkedIn">
                <input type="radio"
                [value]="true" 
                name="checkedIn"
                [ngModel]="details?.checkedIn"
                (ngModelChange)="toggleCheckIn($event)"> Yes
            </label>
            <label for="checkedIn">
                <input type="radio"
                [value]="false" 
                name="checkedIn"
                [ngModel]="details?.checkedIn"
                (ngModelChange)="toggleCheckIn($event)"> No
            </label>
        </div>-->

        <div *ngIf="form.value.checkedIn">
            Passenger Checked In Date:
            <input type="date" 
            name="checkInDate"
            [ngModel]="details?.checkInDate | date">
        </div>

        <button [disabled]="form.invalid" class="btn" type="submit">
                Update Passenger <span class="badge badge-primary"></span>
        </button>
        <hr/>

        {{form.value | json}}
    </form>
    `
})

export class PassengerFormComponent{
    baggage: Baggage[] = [{
        key: 'none',
        value:'No baggage'
    },
    {
        key: 'hand-only',
        value:'Hand Baggage'
    },
    {
        key: 'hold-only',
        value:'Hold baggage'
    },
    {
        key: 'hand-hold',
        value:'Hand & Hold baggage'
    }];

    @Input() 
    details: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    toggleCheckIn(checkedIn: boolean){
        if(checkedIn){
            this.details.checkInDate = Date.now();
        }
    }
    
    handleSubmit(passenger: Passenger, isValid:boolean){
        if(isValid){
            this.update.emit(passenger);
        }
    }

}