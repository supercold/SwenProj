import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  schedule = {};
  
    constructor(private scheduleService: ScheduleService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getSchedule(this.route.snapshot.params['id']);
    }
  
    getSchedule(id) {
      this.scheduleService.showSchedule(id).then((res) => {
        this.schedule = res;
        console.log(this.schedule);
      }, (err) => {
        console.log(err);
      });
    }
  
    updateSchedule(id) {
      this.scheduleService.updateSchedule(id, this.schedule).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/schedule-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
  

}
