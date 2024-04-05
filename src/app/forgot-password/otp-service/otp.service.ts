import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpBackend } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OtpService {

  // private http: HttpClient;

  // constructor(private httpBackend: HttpBackend) {
  //   this.http = new HttpClient(httpBackend); 

  // }

  constructor(private http:HttpClient){}
  
  

  getToken():  string {
    return  localStorage.getItem('token') || '';
  }
  

  getOTP(data:any){
    const URL = "http://localhost:8080/api/forgotPassword"
    return this.http.post<any>(URL,data)
  }

  verifyOTP(data:any){
    const URL = "http://localhost:8080/api/verifyOTP"
    return this.http.post<any>(URL,data)
  }

  changePass(data:any){

    console.log(this.getToken())

    // const options = new HttpHeaders().set('token',this.getToken())
    
    // console.log(options)
    const URL = "http://localhost:8080/api/resetPassword"

    return this.http.post<any>(URL,data)
  }
}
