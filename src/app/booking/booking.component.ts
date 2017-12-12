import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings: any;  

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.getBookingList();
  }

  getBookingList() {
    this.bookingService.getAllBookings().then((res) => {
      this.bookings = res;
    }, (err) => {
      console.log(err);
    });
  }


}
