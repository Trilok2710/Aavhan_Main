import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RefreshPageService } from '../refresh-page.service';
import { events } from '../events/event-list';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  user = null;
  user_string = '';
  Events:any
  send_id!: String;
  event: any;
  id!: string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private refreshPageService: RefreshPageService,
    private router: Router,
    private Activatedroute: ActivatedRoute
  ) {
    console.log('Hello');
  }
  ngOnInit() {

  this.id = this.router.url.split('/')[2].toLowerCase();
  const send_id = this.id;

  // this.refreshPageService.GetEvent(send_id).subscribe((res) => {
  //   console.log(res);
  //   // var today = new Date();
  //   this.Events = res;
  //   var eventdate = new Date(this.Events.date)
 
  //   var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let day = eventdate.getDate();
  //   let month = months[eventdate.getMonth()];
  //   let year = eventdate.getFullYear();
  //   let format = `${day}  ${month},  ${year}`;
  //   this.Events.date = format
   
  //   });

  this.Events = events;
  this.event = events[Number(send_id)-1]
  // this.event = events.find((even:any) => even._id == this.send_id);
    console.log(this.event)
  }
  
  goToUrl(){
    window.location.href = 'https://www.townscript.com/e/aavhan-2023-202434';
  }




}
