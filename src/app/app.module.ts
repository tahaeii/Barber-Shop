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
    Section5Component
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
