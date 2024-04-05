import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm} from '@angular/forms';
import { LoginService } from '../login-service/login.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface type {
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {

  constructor( private loginService : LoginService, private toastr : ToastrService, private router : Router){}

  selectedValue: string='';

  loginForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    type : new FormControl('',Validators.required)
  });

  types:type[]= [
    {value: "individual", viewValue:" As Individual"},
    {value:"contingent", viewValue:"As a contingent"}

  ]

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigateByUrl('/');
    }
  }


  onSubmit(){
      
    let registrationData = this.loginForm.value
    console.log(registrationData)
    this.loginService.submitForm(registrationData)
    .subscribe({
      next: (response) => {
        console.log(response)
        if(response.status == 200){
          localStorage.setItem('token', response.token);
          // this.router.navigate(['/events'])
          window.location.reload()
        }
        else if(response.status == 400){
          this.toastr.error('Password entered is incorrect','Login Unsuccessful');
        }
        else if(response.status == 403){
          this.toastr.error('Email ID/ Phone No. not registered','Login Unsuccessful');
        }
        
        else if(response.status==500){
          this.toastr.error('Some Error Occured','Login Unsuccessful');
        }
      },
      error: (error) => console.log(error),
    });
  }
}
