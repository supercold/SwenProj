import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DailyService } from '../daily.service';

@Component({
  selector: 'app-daily-edit',
  templateUrl: './daily-edit.component.html',
  styleUrls: ['./daily-edit.component.css']
})
export class DailyEditComponent implements OnInit {

  daily = {};
  
    constructor(private dailyService: DailyService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getDaily(this.route.snapshot.params['id']);
    }
  
    getDaily(id) {
      this.dailyService.showDaily(id).then((res) => {
        this.daily = res;
        console.log(this.daily);
      }, (err) => {
        console.log(err);
      });
    }
  
    updateDaily(id) {
      this.dailyService.updateDaily(id, this.daily).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/daily-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
}
