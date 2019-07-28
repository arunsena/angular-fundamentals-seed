import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-details',
    styleUrls: ['passenger-details.scss'],
    template:`
    <ul>
        <li> 
            <span class="status" [class.checked-in]="detail.checkedIn"></span>
            <div *ngIf="editing">
                <input type="text" 
                [value]="detail.fullname" 
                (input)="onNameChange(name.value)"
                #name/>
            </div>
            <div *ngIf="!editing">{{detail.fullname}}</div>
            <div class="sub-text"> 
                Check in date: {{detail.checkInDate ? (detail.checkInDate| date: 'yMMMd') : ''}}
            </div>
            <button class="btn" (click)="toggleEdit()">
                {{editing? 'Done': 'Edit'}} <span class="badge badge-primary"></span>
            </button>
            <button class="btn" (click)="onRemove()">
                Remove <span class="badge badge-danger"></span>
            </button>
            <button class="btn" (click)="onView()">
                View <span class="badge badge-secondary"></span>
            </button>
        </li>
    </ul>
    `
})
export class PassengerDetailsComponent implements OnChanges{
    @Input()
    detail: Passenger;

    @Output()
    remove: EventEmitter <any> = new EventEmitter();

    @Output()
    edit: EventEmitter <any> = new EventEmitter();

    @Output()
    view: EventEmitter <any> = new EventEmitter();

    editing: boolean = false;

    constructor(){}

    ngOnChanges(changes){
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }

    onNameChange(value){
        this.detail.fullname = value;
    }
    toggleEdit(){
        if(this.editing) this.onEdit();
        this.editing = !this.editing;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }

    onEdit(){
        this.edit.emit(this.detail);
    }

    onView(){
        this.view.emit(this.detail);
    }

}