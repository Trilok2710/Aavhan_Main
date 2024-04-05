import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // Service to submit form data to backend
  submitForm(data:any) {
    const URL_cont = "http://localhost:8080/api/registerContingent"
    const URL_indi = "http://localhost:8080/api/registerIndividual"
    console.log(data)
    if(data.type=='contingent'){
      return this.http.post<any>(URL_cont, data)
    } else return this.http.post<any>(URL_indi, data)
    
    // .subscribe({
    //   next: (response) => console.log(response),
    //   error: (error) => console.log(error),
    // });
  }

  constructor(private http: HttpClient) { }
}