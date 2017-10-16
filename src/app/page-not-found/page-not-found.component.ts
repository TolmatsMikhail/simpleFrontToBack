import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  goBack() {
  	this.location.back();
  }
}
