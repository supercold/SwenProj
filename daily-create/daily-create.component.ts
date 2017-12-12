import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyService } from '../daily.service';

@Component({
  selector: 'app-daily-create',
  templateUrl: './daily-create.component.html',
  styleUrls: ['./daily-create.component.css']
})
export class DailyCreateComponent implements OnInit {

  daily = {};
  
    constructor(private dailyService: DailyService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveDaily() {
      this.dailyService.saveDaily(this.daily).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/daily-details', id]);
      }, (err) => {
        console.log(err);
      });
    }

}
