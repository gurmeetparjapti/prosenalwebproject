import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { BlankpageComponent } from './layout/blankpage/blankpage.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { ContactUsComponent } from './sharecomponent/contact-us/contact-us.component';
import { FooterComponent } from './sharecomponent/footer/footer.component';
import { NavbarComponent } from './sharecomponent/navbar/navbar.component';
import { ServicepageComponent } from './sharecomponent/servicepage/servicepage.component';
@NgModule({
  declarations: [
    AppComponent,
    BlankpageComponent,
    FullpageComponent,
    AdminlayoutComponent,
    NavbarComponent,
     FooterComponent,
     ContactUsComponent,
     ServicepageComponent
 
  ],
  imports: [
    BrowserModule,MatIconModule,MatSidenavModule,MatToolbarModule,MatListModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatExpansionModule
    ,ReactiveFormsModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
