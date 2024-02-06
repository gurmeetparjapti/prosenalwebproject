import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from 'src/app/sharecomponent/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductRoutingModule } from './product-routing.module';






@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    
    
  ]
})
export class ProductModule { }
