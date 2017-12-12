import { Component, OnInit } from '@angular/core';
import { RoomstatusreportService } from 'app/roomstatusreport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roomstatusreport-create',
  templateUrl: './roomstatusreport-create.component.html',
  styleUrls: ['./roomstatusreport-create.component.css']
})
export class RoomstatusreportCreateComponent implements OnInit {

  status = {};
  
    constructor(private statusService: RoomstatusreportService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveStatus() {
      this.statusService.saveStatus(this.status).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/status-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
}
