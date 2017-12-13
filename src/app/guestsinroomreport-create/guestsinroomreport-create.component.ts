import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guestsinroomreport-create',
  templateUrl: './guestsinroomreport-create.component.html',
  styleUrls: ['./guestsinroomreport-create.component.css']
})
export class GuestsinroomreportCreateComponent implements OnInit {

  guest = {};
  
    constructor(private guestService: GuestService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveGuest() {
      this.guestService.saveGuest(this.guest).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/guest-details', id]);
      }, (err) => {
        console.log(err);
      });
    }

}
