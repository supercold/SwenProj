import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.css']
})
export class ScheduleCreateComponent implements OnInit {

  schedule = {};
  
    constructor(private scheduleService: ScheduleService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveSchedule() {
      this.scheduleService.saveSchedule(this.schedule).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/schedule-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
  

}
