import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetdataserviceService } from './getdataservice.service'
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {

  constructor(public getdataserviceService : GetdataserviceService) {

  }

  title = 'app';

  books: any[] = [
  	{
  		title: 'Static First book',
  	},
  	{
  		title: 'Static Second book'
  	},
  	{
  		title: 'Static Third book',
  	}
  ];


  ngOnInit() {
  	console.log('I\'m working! ');
  }

  clickOnButton() {
    this.getdataserviceService.getInfoFromServer()
      .subscribe(
         (response) => {this.addBooksToList(response.json()), console.log(response.json())},
         (err) => console.log(err)
      )
  }

  addBooksToList(arr: any) {
    _.each(arr, (item: any) => {
      this.books.push({title: item.title})
    })
  }
}
