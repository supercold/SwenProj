import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  booking = {};
  
    constructor(private router: Router, private route: ActivatedRoute, private bookingService: BookingService) { }
  
    ngOnInit() {
      this.getBookingDetail(this.route.snapshot.params['id']);
    }
  
    getBookingDetail(id) {
      this.bookingService.showBooking(id).then((res) => {
        this.booking = res;
        console.log(this.booking);
      }, (err) => {
        console.log(err);
      });
    }
  
    deleteBooking(id) {
      this.bookingService.deleteBooking(id).then((result) => {
        this.router.navigate(['/bookings']);
      }, (err) => {
        console.log(err);
      });
    }
}
