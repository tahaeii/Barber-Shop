import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModul } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from './persian-dateadapter';
import { Section6Component } from './section6/section6.component';
import { ReservedComponent } from './user-account/reserved/reserved.component';
import { Section7Component } from './section7/section7.component';
import { DateComponent } from './section4/date/date.component';
import { FooterComponent } from './footer/footer.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ProfileComponent } from './user-account/profile/profile.component';
import { PopUpComponent } from './section4/pop-up/pop-up.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    HomeComponent,
    Section4Component,
    Section5Component,
    Section6Component,
    ReservedComponent,
    Section7Component,
    DateComponent,
    FooterComponent,
    UserAccountComponent,
    ProfileComponent,
    PopUpComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModul,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [{
    provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE]
  }, {
    provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
