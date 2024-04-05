import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm} from '@angular/forms';
import { CustomValidators } from './confirmed.validator';
import { ErrorStateMatcher } from '@angular/material/core';
import { OtpService } from '../otp-service/otp.service';
import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router'
import { Subscription } from 'rxjs'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidParent );
  }
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{

  constructor(private otpService:OtpService, private toastr:ToastrService, private router:Router){

  }

  matcher = new MyErrorStateMatcher();

  passForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    confirmPass : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  },[CustomValidators.MatchValidator('password','confirmPass')]
  );

  get passwordMatchError() {
    console.log(this.passForm.getError('mismatch'))
    return (
      this.passForm.getError('mismatch') &&
      this.passForm.get('confirmPass')?.touched
    );
  }


  ngOnInit(){

    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigateByUrl('/login');
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        localStorage.removeItem('token');
        window.location.reload()
      }
    });



  }



  onSubmit(){
    console.log(this.passForm.value)
    let passData = this.passForm.value
    console.log(passData)
    this.otpService.changePass(passData)
    .subscribe({
      next:(response) => {
        console.log(response)
        if(response.status==200){
          localStorage.removeItem('token')
          this.toastr.success('Password Changed Successfully','Success')
          // this.router.navigateByUrl('/login')
          window.location.reload()
        }
        else if(response.status == 400){
          this.toastr.error('User not registered','Error')
        }
        else {
          this.toastr.error('Some error occured.Try Again')
        }

      },
      error:(error) => {
        console.log(error)
        this.toastr.error('Some error occured.Try Again')
      }

    })

  }


}
