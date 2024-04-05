import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm} from '@angular/forms';
import { OtpService} from './otp-service/otp.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

interface type {
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private otpService:OtpService, private toastr:ToastrService,private router:Router){}

  email:any;
  type:any;

  selectedValue:any=''

  emailForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    type : new FormControl('', Validators.required),
  })

  otpForm = new FormGroup({
    otp : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
  })

  types:type[]= [
    {value: "individual", viewValue:" As Individual"},
    {value:"contingent", viewValue:"As a contingent"}

  ]

  getOTP(){
    let emailData = this.emailForm.value
    this.type = this.emailForm.value.type;
    this.email = this.emailForm.value.email;
    console.log(this.email)

    console.log(emailData)

    this.otpService.getOTP(emailData)
    .subscribe({
      next:(response) => {
        console.log(response)
        if(response.status==200){
          this.toastr.success('OTP sent to the email ID','Success')
        }
        else{
          this.toastr.error('Some error ocurred.Try Again','Error')
        }

      },
      error:(error) =>{
        console.log(error)
        this.toastr.error('Some error ocurred.Try Again','Error')

      } 
    })

  }

  verifyOTP(){
    let otpData:any = this.otpForm.value
    otpData.type=this.type
    otpData.email = this.email
    console.log(otpData)
    this.otpService.verifyOTP(otpData)
    .subscribe({
      next:(response) => {
        console.log(response)
        if(response.status==200){
          localStorage.setItem('token',response.token)
          this.toastr.success('OTP verified','Success')
          this.router.navigateByUrl('/reset')
        }
        else if(response.status == 400){
          this.toastr.error('Incorrect OTP.Try Again','Error')
        }
        else if(response.status == 410){
          this.toastr.error('OTP expired.Try Again','Error')
        }
        else {
          this.toastr.error('Some error occured.Try Again')
        }

      },
      error:(error) => console.log(error)
    })
  }
}
