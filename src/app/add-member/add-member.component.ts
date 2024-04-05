import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent {

  addMember = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(1)]),
    leader_name : new FormControl('', [Validators.required, Validators.minLength(1)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  show:boolean = false;

  onSubmit(){
    this.addMember.reset();
    this.show = true;
  }

  get name(){
    return this.addMember.get('name');
  }
  get leader(){
    return this.addMember.get('leader_name');
  }
  get email(){
    return this.addMember.get('email');
  }
  get phone(){
    return this.addMember.get('phone');
  }
}
