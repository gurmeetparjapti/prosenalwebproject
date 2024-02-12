import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/myservice/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss'],
})
export class CreateaccountComponent implements OnInit {
  submitted: boolean = false;
  maxInputLength: number = 25;
  phone_lenght: number = 10;
  alert: boolean | undefined;
  formbuilder: any;
  constructor(private myservice: ServiceService) {}

  myform = new FormGroup({
    Username: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(2),
      Validators.pattern('([A-Z]){1}([a-z])*$')
    ]),
    user_email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+'),
    ]),
    phone_no: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    user_pass: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(8),
    ]),
    user_repass: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(8),
    ]),
  });

  //pass match to

  ///validation wor
  ngOnInit(): void {
  
  }

  get f(): any {
    return this.myform.controls;
  }
  onsubmit() {
    this.submitted = true;
    if (this.myform.invalid) {
      this.erroralert();
    } else {
      if (this.myform.value.user_pass === this.myform.value.user_repass) {
        this.myservice.insertrecord(this.myform.value).subscribe((d) => {
          console.log(d);
          this.alertfun();
        });
        this.myform.reset();
      } else {
        return alert('password and repassword is not match');
      }
    }
  }

  //this is the form submission is suucessfull
  alertfun() {
    Swal.fire({
      title: 'Good job!',
      text: 'Your Data is Submmited :-)!',
      icon: 'success',
    });
  }

  //this is the error massage fun
  erroralert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
