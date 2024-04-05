// import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefreshPageService } from '../refresh-page.service';
import { events } from './event-list';
// import { SlideInOutAnimation } from './animations'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  // Events:any = [];
  onActivate() {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 
     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)
 }
  User:any = [];

  constructor(private router: Router,@Inject(DOCUMENT) private document: Document,private refreshPageService: RefreshPageService, private Activatedroute: ActivatedRoute) { }



  // ngOnInit() {
  //   this.User=localStorage.getItem('token');
  //   console.log(this.User)
  //   this.refreshPageService.getAllEvents().subscribe(res => {
  //     console.log(res)
  //     this.Events =res;

  //     console.log(this.Events)
  //     console.log(this.Events[5].images);
  //     // console.log(this.Events.tags);
  //   });


  //}
  Events = events
}
