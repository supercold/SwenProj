import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.css']
})
export class BookingCreateComponent implements OnInit {

  booking = {};
  
    constructor(private bookingService: BookingService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveBooking() {
      this.bookingService.saveBooking(this.booking).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/booking-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
}
