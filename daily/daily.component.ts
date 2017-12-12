import { Component, OnInit } from '@angular/core';
import { DailyService } from '../daily.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  dailys: any;  
  
    constructor(private dailyService: DailyService) { }
  
    ngOnInit() {
      this.getDailyList();
    }
  
    getDailyList() {
      this.dailyService.getAllDailys().then((res) => {
        this.dailys = res;
      }, (err) => {
        console.log(err);
      });
    }
  

}
