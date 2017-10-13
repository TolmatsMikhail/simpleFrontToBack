import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';

  people: any[] = [
  	{
  		name: 'First name',
  		age: '18'
  	},
  	{
  		name: 'Second name',
  		age: '26'
  	},
  	{
  		name: 'Third name',
  		age: '38'
  	}
  ];

  constructor() {

  }

  ngOnInit() {
  	console.log('I\'m working! ');
  }

  clickOnButton() {
  	;
  }
}
