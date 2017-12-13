import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeeklyService } from 'app/weekly.service';

@Component({
  selector: 'app-weekly-detail',
  templateUrl: './weekly-detail.component.html',
  styleUrls: ['./weekly-detail.component.css']
})
export class WeeklyDetailComponent implements OnInit {

  weekly = {};
  
    constructor(private router: Router, private route: ActivatedRoute, private weeklyService: WeeklyService) { }
  
    ngOnInit() {
      this.getWeeklyDetail(this.route.snapshot.params['id']);
    }
  
    getWeeklyDetail(id) {
      this.weeklyService.showWeekly(id).then((res) => {
        this.weekly = res;
        console.log(this.weekly);
      }, (err) => {
        console.log(err);
      });
    }
  
    deleteWeekly(id) {
      this.weeklyService.deleteWeekly(id).then((result) => {
        this.router.navigate(['/weeklys']);
      }, (err) => {
        console.log(err);
      });
    }

}
