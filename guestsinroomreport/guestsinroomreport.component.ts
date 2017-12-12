import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';
@Component({
  selector: 'app-guestsinroomreport',
  templateUrl: './guestsinroomreport.component.html',
  styleUrls: ['./guestsinroomreport.component.css']
})
export class GuestsinroomreportComponent implements OnInit {

  guests: any;  
  
    constructor(private guestService: GuestService) { }
  
    ngOnInit() {
      this.getGuestList();
    }
  
    getGuestList() {
      this.guestService.getAllGuests().then((res) => {
        this.guests = res;
      }, (err) => {
        console.log(err);
      });
    }

}
