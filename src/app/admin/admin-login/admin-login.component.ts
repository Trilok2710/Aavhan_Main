import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm : FormGroup;
  username : string = "";
  password : string = "";
  // loginForm = new FormGroup({
  //   username : new FormControl(''),
  //   password : new FormControl(''),
  // });

  constructor(
    public formBuilder: FormBuilder,
    private AdminService: AdminService,
    private router: Router,
    private http: HttpClient,
    ) {
      this.loginForm = this.formBuilder.group({
        username: [''],
        password: [''],
      });
    }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.router.navigateByUrl('/admin');
    }
  }

  submitForm() {
    // const credentials = { username: this.loginForm.value.username, password: this.loginForm.value.password };
this.username = this.loginForm.value.username;
this.password = this.loginForm.value.password;
console.log(this.username,this.password)
    this.AdminService.loginUser(this.username, this.password)
      .subscribe((response: any) => {
        console.log("here is token",response.token)
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/admin');
      });

    // this.http.post('http://localhost:8000/login', this.loginForm)
    // .subscribe((token) => {
    //   localStorage.setItem('token', token);
    //   // navigate to the admin page
    // });
  }
}
