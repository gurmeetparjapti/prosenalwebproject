import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/myservice/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  submitted: boolean = false;
  myloc: any;
  captchaValue: any ='';
                                                                                                                                                                                                                                                                                                                    
  
  constructor(private myservice:ServiceService,private fb:FormBuilder) { }

  mylogin = new FormGroup({
    user_email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+')]),
    user_pass: new FormControl('',[Validators.required]),
    ecceptTerm:new FormControl (['',false, Validators.required])
  });
ngOnInit(): void {
    
}
  //this is the error returne funy

  get f(): any {
    return this.mylogin.controls;
  }

  // this is the submit action myfrom
  OnSubmit() {
    this.submitted = true;
    if (this.mylogin.invalid) {
      this.erroralert();
    }
    else {
      this.myservice.loginuser(this.mylogin.value).subscribe((d)=>{
        console.log(d);
          if(d)
          {
            this.mylogin.reset();
            this.alertfun()
          }
          else
          {
            alert("wrong password");
          }
      });
     
     }
    }
  
//alert succes submkt your form
    alertfun(){
      Swal.fire({
        title: "Good job!",
        text: "Your Data is match!",
        icon: "success"
      });
      
    }
    
erroralert(){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: 'Usermail & Userpass is Required!'
  });
}

//   validcap(){
//     let string1= this.captchaValue;
//     let string2= this.mylogin.value.captchacode;
//     if(string1==string2){
//       return true;
//     }
//     else{
//       this.cap();
//       this.mylogin.controls['captchacode'].setValue('');
//       return false;
//     }
//   }  
// cap(){
//   var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
//   var a= alpha[Math.floor(Math.random()*36)];
//   var b= alpha[Math.floor(Math.random()*36)];
//   var c= alpha[Math.floor(Math.random()*36)];
//   var d= alpha[Math.floor(Math.random()*36)];
//   var e= alpha[Math.floor(Math.random()*36)];
//   var f= alpha[Math.floor(Math.random()*36)];

//   var sum=a+b+c+d+e+f;
//   this.captchaValue=sum;
//   this.mylogin.controls['captcha'].setValue(this.captchaValue);
// }
}
