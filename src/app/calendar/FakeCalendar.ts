import {Component, View, Inject, ElementRef, OnInit} from 'angular2/core';

@Component({
    selector: 'calendar',
    template: `
    <div>
        <button (click)="addEvent()">Add Event</button>
        <p>Calendar component:</p>
	    
        <div class="calendar" id="calendar">
        </div>
	</div>
    `,
    styles: [require('fullcalendar/dist/fullcalendar.css').toString() ]
})

export class Calendar implements OnInit {
    private calendarElem: any;

    constructor(public elementRef: ElementRef) {

    }

    ngOnInit() {
        
    }
    
   
}
