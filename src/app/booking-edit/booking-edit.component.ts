import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

  booking = {};
  
    constructor(private bookingService: BookingService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getBooking(this.route.snapshot.params['id']);
    }
  
    getBooking(id) {
      this.bookingService.showBooking(id).then((res) => {
        this.booking = res;
        console.log(this.booking);
      }, (err) => {
        console.log(err);
      });
    }
  
    updateBooking(id) {
      this.bookingService.updateBooking(id, this.booking).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/booking-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
  
}
