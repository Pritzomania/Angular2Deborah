import { Component } from '@angular/core'

@Component({
	selector : 'pm-app',
	template : `
	<div>{{pageTitle}}</div>
	<pm-products>Test</pm-products>
	`
})

export class AppComponent {
	pageTitle : string = "My Application 1";
}