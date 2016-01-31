import {Component, View, Inject, ElementRef, OnInit} from 'angular2/core';
import * as jQuery from 'jquery';
require('../../assets/bower_components/moment/moment.js');
require('../../assets/bower_components/fullcalendar/dist/fullcalendar.js');

@Component({
    selector: 'calendar',
    template: `
    <div>
        <p>Calendar component:</p>
	    
        <div class="calendar" id="calendar">
        </div>
	</div>
    `,
    styles: [require('../../assets/bower_components/fullcalendar/dist/fullcalendar.css').toString() ]
})

export class Calendar implements OnInit {
    private calendarElem: any;

    constructor(public elementRef: ElementRef) {

    }

    ngOnInit() {
        var el: any = jQuery(this.elementRef.nativeElement);

        this.calendarElem = el.find('#calendar');
        console.log(this.calendarElem);
        this.calendarElem.fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
                
            },
            // businessHours: true,
            editable: true,
            eventLimit: true,
            events: [
				{
					title: 'All Day Event',
					start: '2016-01-01'
				},
				{
					title: 'Long Event',
					start: '2016-01-07',
					end: '2016-01-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2016-01-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2016-01-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2016-01-11',
					end: '2016-01-13'
				},
				{
					title: 'Meeting',
					start: '2016-01-12T10:30:00',
					end: '2016-01-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2016-01-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2016-01-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2016-01-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2016-01-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2016-01-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2016-01-28'
				}
			],
            dayClick: function(date, jsEvent, view) {

                alert('Clicked on: ' + date.format());

                alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

                alert('Current view: ' + view.name);

                // change the day's background color just for fun
                (<any>jQuery(this)).css('background-color', 'red');

            }
        })
    }
}
