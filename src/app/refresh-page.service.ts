import { Injectable } from '@angular/core';
// import { Injectable, Query } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { E } from '@angular/cdk/keycodes';
import { identifierName } from '@angular/compiler';
// import {QueryData} from './models/Query.js'

@Injectable({
  providedIn: 'root'
})
export class RefreshPageService {

  constructor(private httpClient: HttpClient, private http: HttpClient) { }
   // REST_API: string = 'http://10.198.49.8:8080';
   REST_API: string = 'http://localhost:8080';
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   GetEvent(id: String): Observable<any> {
    let API_URL = this.REST_API + '/api/getEvent/' + id;

    console.log(API_URL);
    console.log(id);
    console.log('Hello');

    return this.httpClient
      .get<any>(API_URL, { headers: this.httpHeaders })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
    // return this.httpClient.get(`http://localhost:8080/api/getEvent/`+id, { headers: this.httpHeaders })
  }
   getAllEvents() {
    let API_URL = this.REST_API + '/api/getManyEvents';
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
 
}
