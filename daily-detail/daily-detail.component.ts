import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DailyService } from '../daily.service';

@Component({
  selector: 'app-daily-detail',
  templateUrl: './daily-detail.component.html',
  styleUrls: ['./daily-detail.component.css']
})
export class DailyDetailComponent implements OnInit {

  daily = {};
  
    constructor(private router: Router, private route: ActivatedRoute, private dailyService: DailyService) { }
  
    ngOnInit() {
      this.getDailyDetail(this.route.snapshot.params['id']);
    }
  
    getDailyDetail(id) {
      this.dailyService.showDaily(id).then((res) => {
        this.daily = res;
        console.log(this.daily);
      }, (err) => {
        console.log(err);
      });
    }
  
    deleteDaily(id) {
      this.dailyService.deleteDaily(id).then((result) => {
        this.router.navigate(['/dailys']);
      }, (err) => {
        console.log(err);
      });
    }
}
