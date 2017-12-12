import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent implements OnInit {

  schedule = {};
  
    constructor(private router: Router, private route: ActivatedRoute, private scheduleService: ScheduleService) { }

    ngOnInit() {
      this.getScheduleDetail(this.route.snapshot.params['id']);
    }
  
    getScheduleDetail(id) {
      this.scheduleService.showSchedule(id).then((res) => {
        this.schedule = res;
        console.log(this.schedule);
      }, (err) => {
        console.log(err);
      });
    }
  
    deleteSchedule(id) {
      this.scheduleService.deleteSchedule(id).then((result) => {
        this.router.navigate(['/schedules']);
      }, (err) => {
        console.log(err);
      });
    }
  }
