import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GuestService } from 'app/guest.service';

@Component({
  selector: 'app-guestsinroomreport-detail',
  templateUrl: './guestsinroomreport-detail.component.html',
  styleUrls: ['./guestsinroomreport-detail.component.css']
})
export class GuestsinroomreportDetailComponent implements OnInit {

  guest = {};
  
    constructor(private router: Router, private route: ActivatedRoute, private guestService: GuestService) { }
  
    ngOnInit() {
      this.getGuestDetail(this.route.snapshot.params['id']);
    }
  
    getGuestDetail(id) {
      this.guestService.showGuest(id).then((res) => {
        this.guest = res;
        console.log(this.guest);
      }, (err) => {
        console.log(err);
      });
    }
  
    deleteGuest(id) {
      this.guestService.deleteGuest(id).then((result) => {
        this.router.navigate(['/guests']);
      }, (err) => {
        console.log(err);
      });
    }
}

