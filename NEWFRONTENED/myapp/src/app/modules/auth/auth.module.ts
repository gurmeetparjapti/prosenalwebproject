import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthRoutingModule } from './auth-routing.module';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    CreateaccountComponent,
    ForgetComponent,
  ],
  imports: [
    CommonModule,SweetAlert2Module,
    AuthRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class AuthModule { }
