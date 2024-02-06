import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankpageComponent } from './layout/blankpage/blankpage.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';




@NgModule({
  declarations: [
    AppComponent,
    BlankpageComponent,
    FullpageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
