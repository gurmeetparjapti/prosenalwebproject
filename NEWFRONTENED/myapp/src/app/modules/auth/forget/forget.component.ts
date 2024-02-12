import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit{
  form = new FormGroup({
    email: new FormControl(''),

    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
   
  });
  submitted = false;
  alert: boolean | undefined;

  constructor(private router: Router, private formBuilder: FormBuilder,) {}




  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
       
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
            Validators.pattern('([A-Z]){1}([a-z])*$'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
       
      },
      
    );



    const previousData = this.getPreviousData();
    console.log(previousData);

    if (previousData) {
      this.form.patchValue(previousData[0]);

    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(data:any): void {
    this.submitted = true;
    

    if (this.form.invalid) {
      return console.warn( 'invalid entries');
    }
    else {
      console.log( this.form.value);
      
    }
    this.alert = true;

    this.submitted = false;
    this.form.reset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  closeAlert() {
    this.alert = false;
  }

  goTologin() {
    this.router.navigate(['/login']);
  }

  getPreviousData(): any {
    const Data = localStorage.getItem('formData');
    console.log(Data);

    return Data ? JSON.parse(Data) : null;

  }

}


