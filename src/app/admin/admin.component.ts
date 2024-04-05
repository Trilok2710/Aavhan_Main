import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private router: Router,
    ) {
    }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigateByUrl('/admin/login');
    }
  }
  logout(){
    console.log('logout')
    localStorage.setItem('token','');
    this.router.navigateByUrl('/admin/login');
  }
}
