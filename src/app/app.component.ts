import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  navbarCollapsed = true;
  User:any = [];
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
  constructor(){

  }

  onActivate() {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 
 }
  ngOnInit(){

    this.User=localStorage.getItem('token');
    console.log(this.User)
    console.log(this.navbarCollapsed)
  }
  logout(){
    this.User=null;
    localStorage.removeItem('token');

  }
}
