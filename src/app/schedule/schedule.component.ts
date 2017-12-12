import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: any;
  
    constructor(private scheduleService: ScheduleService) { }
  
    ngOnInit() {
      this.getScheduleList();
    }
  
    getScheduleList() {
      this.scheduleService.getAllSchedules().then((res) => {
        this.schedules = res;
      }, (err) => {
        console.log(err);
      });
    }
  

}
