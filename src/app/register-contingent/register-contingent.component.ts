import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm} from '@angular/forms';
import { RegisterService } from './reg-service/register.service';
import { CustomValidators } from './confirmed.validator';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { RegisterMessageComponent } from '../register-message/register-message.component';
import { ToastrService } from 'ngx-toastr';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidParent );
  }
}


interface type {
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-register-contingent',
  templateUrl: './register-contingent.component.html',
  styleUrls: ['./register-contingent.component.css'],
})
export class RegisterContingentComponent {

  constructor(private _formBuilder: FormBuilder, private registerService: RegisterService , private router:Router,public dialog:MatDialog, private toastr:ToastrService) {}

  selectedValue: string='';
  User:any = [];
  matcher = new MyErrorStateMatcher();

  regForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    college: new FormControl('', [Validators.required]),
    // leader : new FormControl('', [Validators.required, Validators.minLength(1)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phoneNo : new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    altNo : new FormControl(''),
    type : new FormControl('', Validators.required),
    address: new FormControl('',[Validators.required]),
    pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    confirmPass : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  },[CustomValidators.MatchValidator('password','confirmPass')]
  );

  types:type[]= [
    {value: "individual", viewValue:" As Individual"},
    {value:"contingent", viewValue:"As a contingent"}

  ]

  openDialog(mssg:any) {
    const dialogRef = this.dialog.open(RegisterMessageComponent,
      {
        width:'40%',
        data:{
          mssg:mssg
        },
        panelClass: 'custom-modalbox'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  show: boolean = false;
  // onsubmit(){
  //   console.log(this.regForm.value);
  //   this.regForm.reset();
  //   this.show = true;
  // }

  get passwordMatchError() {
    console.log(this.regForm.getError('mismatch'))
    return (
      this.regForm.getError('mismatch') &&
      this.regForm.get('confirmPass')?.touched
    );
  }
  errorMsg:String="";

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigateByUrl('/');
    }

  }

  onSubmit(){
    let registrationData = this.regForm.value
    console.log(registrationData)
    this.registerService.submitForm(registrationData)
    .subscribe({
        next: (response) => {
          console.log(response.status)
          if(response.status == 200) {
            localStorage.setItem('token', response.token);
            this.User=localStorage.getItem('token');
            window.location.reload()
            // this.router.navigate(['/events'])
          }
          else if(response.status == 400) {
            let msg = "The information entered is incomplete. Try filling the registration form again"
            // this.openDialog(msg)
            this.toastr.error(msg,'Registration Failed')
          }
          else if(response.status == 409) {
            let msg = "The Email-ID or Phone Number is already in use. Try registering using different credentials"
            // this.openDialog(msg)
            this.toastr.error(msg,'Registration Failed')
          }
        },
        error: (error) => console.log(error),
      });
  }
  // get name(){
  //   return this.regForm.get('name')
  // }
  // get leader(){
  //   return this.regForm.get('leader')
  // }
  // get email(){
  //   return this.regForm.get('email')
  // }
  // get phone(){
  //   return this.regForm.get('phone')
  // }

  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // isLinear = false;
}

