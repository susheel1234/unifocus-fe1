import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  public seatDetails:any = null;
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
      this.seatDetails.booked_sheets = this.seatDetails.booked_sheets.map(elem => parseInt(elem));
    });
  }

  getSeatColour(i, j){
    const seatId = 7*i + j;
    if(this.seatDetails.booked_sheets.includes(seatId)){
      return this.seatDetails.booked_seat_colour;
    } else {
      return this.seatDetails.available_seat_colour;
    }
  }

  bookSeat(seatId){
    this.http.post('http://localhost:3000/bookings/user', {username: 'test', seatId: seatId}).subscribe((response) => {
      // Handle the response data
      console.log(response, '============-----');
      this.getSeatDetails();
    });
  }

}
