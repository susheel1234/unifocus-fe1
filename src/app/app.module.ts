import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingDetailsComponent } from './bookings/booking-details/booking-details.component';
import { UserBookingsComponent } from './bookings/user-bookings/user-bookings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    BookingDetailsComponent,
    UserBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
