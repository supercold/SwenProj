import { Component, OnInit } from '@angular/core';
import { WeeklyService } from 'app/weekly.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly-create',
  templateUrl: './weekly-create.component.html',
  styleUrls: ['./weekly-create.component.css']
})
export class WeeklyCreateComponent implements OnInit {
  weekly = {};
  
    constructor(private weeklyService: WeeklyService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveWeekly() {
      this.weeklyService.saveWeekly(this.weekly).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/weekly-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
  

}
