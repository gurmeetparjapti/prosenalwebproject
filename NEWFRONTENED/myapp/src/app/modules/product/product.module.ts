import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';





@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,FormsModule 
    
  ]
})
export class ProductModule { }
