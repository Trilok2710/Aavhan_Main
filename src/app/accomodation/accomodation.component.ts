import { Component } from '@angular/core';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent {


  goToUrl(){

    window.location.href = 'https://docs.google.com/forms/d/1ZjWK6zGqvQQrkVdkpzLQ4oBAkZ7MuNeMDrygaGdey-0/edit';

  }

}
