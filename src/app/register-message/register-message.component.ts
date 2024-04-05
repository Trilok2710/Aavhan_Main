import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface message {
  mssg:String
}

@Component({
  selector: 'app-register-message',
  templateUrl: './register-message.component.html',
  styleUrls: ['./register-message.component.css']
})
export class RegisterMessageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: message){}

  // messages:message[]=[
  //   { status:400, 
  //     displayMsg:"Unable to register since the information entered is incomplete. Try filling the registration form again.",
  //     buttonMsg:"Try Again"
  //   },
  //   { status:409, 
  //     displayMsg:"Unable to register since the Email-ID or Phone No. is already in use. Try registering using different credentials.",
  //     buttonMsg:"Try Again"
  //   },
  //   { status:200,
  //     displayMsg:"Registration Successful. Head over to login page"}
  // ]



}
