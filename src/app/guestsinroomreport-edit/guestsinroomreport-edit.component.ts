import { Component, OnInit } from '@angular/core';
import { GuestService } from 'app/guest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guestsinroomreport-edit',
  templateUrl: './guestsinroomreport-edit.component.html',
  styleUrls: ['./guestsinroomreport-edit.component.css']
})
export class GuestsinroomreportEditComponent implements OnInit {

  guest = {};
  
    constructor(private guestService: GuestService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getGuest(this.route.snapshot.params['id']);
    }
  
    getGuest(id) {
      this.guestService.showGuest(id).then((res) => {
        this.guest = res;
        console.log(this.guest);
      }, (err) => {
        console.log(err);
      });
    }
  
    updateGuest(id) {
      this.guestService.updateGuest(id, this.guest).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/guest-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
  

}
