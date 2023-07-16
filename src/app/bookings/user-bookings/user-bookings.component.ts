import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {

  public seatDetails:any = null;
  public userBookings = null;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getSeatDetails();
  }

  getSeatDetails(){
    this.http.get('http://localhost:3000/bookings/seat-details').subscribe((response) => {
      // Handle the response data
      console.log(response, '============-----');
      this.seatDetails = response;
    });
    this.http.get('http://localhost:3000/bookings/user/test').subscribe((response) => {
      // Handle the response data
      console.log(response, '=======user bookings=====-----');
      this.userBookings = response;
    });
  }

  getSeatColour(i, j){
    const seatId = 7*i + j;
    this.seatDetails.booked_sheets.push(13)
    if(this.userBookings && this.userBookings.bookings.includes(seatId)){
      return this.seatDetails.user_seat_colour;
    } else {
      return this.seatDetails.available_seat_colour;
    }
  }

}
