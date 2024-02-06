import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'create',
    component:CreateaccountComponent
  },
  {
    path:'forget',
    component:ForgetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
