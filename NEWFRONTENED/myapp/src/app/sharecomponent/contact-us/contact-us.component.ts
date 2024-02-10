import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit{
  contactus!: FormGroup;
  constructor(){}
  ngOnInit(): void {
 this.contactus =new FormGroup({

  })  
}
}
