
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { request } from 'http';
import { Observable, throwError } from 'rxjs';
// import {adminUser} from './../models/adminuser.js';


// import { eventDetails } from '../models/eventDetails.js';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token_r : string = '';
  REST_API: string = 'http://localhost:8080/api';
  REST_API_without_api: string = 'http://localhost:8080';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  loginUser(username: string, password: string): Observable<any> {
    console.log('Hi1');
    console.log(username, password);
    const credentials = { username, password };
    let API_URL = `${this.REST_API}/login`;
    return this.http.post(API_URL, credentials);
  }

  addEvent(data:any) {
    console.log('Hi1');
    let API_URL = `${this.REST_API}/addevent`;
    return this.http.post(API_URL, data).pipe(
      // map((res: Response) => {
      //   console.log('Hi12');

      //   return res || {};
      // })
    );
  }
}
