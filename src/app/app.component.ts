import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'tolmatc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./normalize.css', './style.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {

  constructor(public router: Router) {

  }

  title = 'app';

  ngOnInit() {
  	console.log('I\'m working! ');
  }

  goToBookList() {
    this.router.navigate(['/book-list'])
  }

  goToGenresList() {
    this.router.navigate(['/genres-list'])
  }

}
