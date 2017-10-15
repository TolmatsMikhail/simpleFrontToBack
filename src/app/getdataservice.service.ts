import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class GetdataserviceService {

  constructor(public http: Http) { }

  getBooksFromServer() {
  	return this.http.get('http://localhost:3000/books');
  }

  addInfoFromServer(data: any) {
  	let jsonData = JSON.stringify(data);
  	let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ withCredentials: true, headers: headers  });
  	return this.http.post('http://localhost:3000/books', jsonData, options);
  }

}
