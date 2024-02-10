import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from 'src/app/sharecomponent/contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },{
    path:'contact-us',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
