/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {Calendar} from './calendar/Calendar';
import {Chart} from './chart/Chart';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    providers: [...FORM_PROVIDERS],
    directives: [...ROUTER_DIRECTIVES, Calendar],
    pipes: [],
    styles: [`
  `],
    template: `
  <h1>App running</h1>
  <a [routerLink]="['Calendar']">Calendar</a> | 
  <a [routerLink]="['Chart']">Chart</a>
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
    { path: '/', name: 'Calendar', component: Calendar, useAsDefault: true },
    { path: '/chart', name: 'Chart', component: Chart},
])
export class App {

    constructor() {

    }
}
