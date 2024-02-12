import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit{
    
  myform!: FormGroup;

  
  ngOnInit(): void {
   this.myform=new FormGroup({
      User_name: new FormControl(''),
      User_email:new FormControl('',),
      Subject_Purpose:new FormControl(''),
      User_Massage:new FormControl('')
    })
  }

}
