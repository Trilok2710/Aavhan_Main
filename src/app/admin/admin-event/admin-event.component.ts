import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  NgZone,
  Inject,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core'; // at top
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.scss'],
})
export class AdminEventComponent implements OnInit {
  addEventForm: FormGroup;
  user = null;
  user_string = '';
  /*########################## File Upload ########################*/
  // @ViewChild('fileInput') el: ElementRef;
  // @ViewChild('fileInput') fileInput: ElementRef = el;
  imageUrl: any = '../assets/img_preview.jpeg';
  editFile: boolean = true;
  removeUpload: boolean = false;
  enteredTitle: any;


  bool: string[] = ['Yes', 'No'];
  ImageBase64Format: any;
  id: string = '';

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private adminService: AdminService,
    fb: FormBuilder,
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    this.addEventForm = this.formBuilder.group({
      title: [''],
      desc: [''],
      venue: [''],
      date_created: new Date(),
      date: [''],
      image: this.imageUrl,
      isGroupEvent: true,
    });
  }

  ngOnInit() {
  }

  uploadFile(event:any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      console.log(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        console.log(this.imageUrl);
        this.editFile = false;
        this.removeUpload = true;
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  // removeUploadedFile() {
  //   let newFileList = Array.from(this.el.nativeElement.files);
  //   this.imageUrl = '../assets/img_preview.jpeg';
  //   this.editFile = true;
  //   this.removeUpload = false;
  // }

  // Submit Registration Form
  onSubmit() {
    console.log(this.addEventForm.value);
    this.addEventForm.patchValue({
      image: this.imageUrl,
    });

    //  title: [''],
    //  desc: [''],
    //  venue: [''],
    //  date_created: new Date(),
    //  author_id:[''],
    //  date:[''],
    //  tags:this.tags.values,
    //  image:this.imageUrl
    this.adminService.addEvent(this.addEventForm.value)
    .subscribe(() => {
        console.log(this.addEventForm.value)
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      }, (err) => {
        console.log(err);
    });
    // this.adminService.addevent(this.addEventForm.value).subscribe(
    //   () => {
    //     console.log(this.addEventForm.value);
    //     // this.ngZone.run(() => this.router.navigateByUrl('/admin'))
    //   },
    //   (err:any) => {
    //     console.log(err);
    //   }
    // );
  }
}
