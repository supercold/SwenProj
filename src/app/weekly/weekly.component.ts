import { Component, OnInit } from '@angular/core';
import { WeeklyService } from 'app/weekly.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

    weeklys: any;  
    
      constructor(private weeklyService: WeeklyService) { }
    
      ngOnInit() {
        this.getWeeklyList();
      }
    
      getWeeklyList() {
        this.weeklyService.getAllWeeklys().then((res) => {
          this.weeklys = res;
        }, (err) => {
          console.log(err);
        });
      }
}
