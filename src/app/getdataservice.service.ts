import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class GetdataserviceService {

  constructor(public http: Http) { }

  getInfoFromServer() {
  	return this.http.get('http://localhost:3000/books');
  }

}
