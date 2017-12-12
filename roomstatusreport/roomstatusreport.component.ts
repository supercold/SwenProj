import { Component, OnInit } from '@angular/core';
import { RoomstatusreportService } from 'app/roomstatusreport.service';

@Component({
  selector: 'app-roomstatusreport',
  templateUrl: './roomstatusreport.component.html',
  styleUrls: ['./roomstatusreport.component.css']
})
export class RoomstatusreportComponent implements OnInit {

  statuses: any;  
  
    constructor(private statusService: RoomstatusreportService) { }
  
    ngOnInit() {
      this.getStatusList();
    }
  
    getStatusList() {
      this.statusService.getAllStatuss().then((res) => {
        this.statuses = res;
      }, (err) => {
        console.log(err);
      });
    }
}
