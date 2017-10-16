import { Component, OnInit } from '@angular/core';
import { GetdataserviceService } from '../getdataservice.service'
import * as _ from 'underscore';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
})
export class BooksListComponent implements OnInit {

  constructor(public getdataserviceService : GetdataserviceService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  public bookTitle: string;

  books: any[] = [];

  getAllBooks() {
    this.getdataserviceService.getBooksFromServer()
      .subscribe(
         (response) => {this.addBooksToList(response.json())},
         (err) => console.log(err)
      )
  }

  clickOnButton() {
    this.getAllBooks();
  }

  addBooksToList(arr: any) {
    _.each(arr, (item: any) => {
      this.books.push({title: item.title})
    })
  }

  removeBookFromList() {

  }

  addBookToServer(bookTitle: string) {
    let title = String(bookTitle);
    let body = { 'title' : title};
    this.sendOneBookRequest(body);
  }

  sendOneBookRequest(body) {
    this.getdataserviceService.addInfoFromServer(body)
      .subscribe( 
        (response) => {
          let newAddedBook = response.json();
          this.books.push(newAddedBook);
          this.bookTitle = '';
        },
        (reject) => {
           throw reject;
        }
      );
  }

  deleteItem(book: any) {
    let title = String(this.bookTitle);
    let body = { 'title' : book};
    console.log(body);

  }

}
