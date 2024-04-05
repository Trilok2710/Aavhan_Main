import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user!: SocialUser;
  constructor( private socialAuthService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      
      this.user = user;
      console.log(user);
      this.router.navigate(['/register-contingent'])
    })
  }

  loginForm = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(1)]),
    phone : new FormControl('', [Validators.required, Validators.minLength(10)]),
    email : new FormControl('', [Validators.required, Validators.email]),
  });

  onlogin(){
    this.loginForm.reset();
  }

  get name(){
    return this.loginForm.get('name');
  };

  get phone(){
    return this.loginForm.get('phone');
  }

  get email(){
    return this.loginForm.get('email');
  }

}
