import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsComponent } from './bookings/booking-details/booking-details.component';
import { UserBookingsComponent } from './bookings/user-bookings/user-bookings.component';

const routes: Routes = [
  {path: 'bookings-detail', component: BookingDetailsComponent},
  {path: 'user-bookings', component: UserBookingsComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
