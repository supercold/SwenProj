import { Component, OnInit } from '@angular/core';
import { WeeklyService } from 'app/weekly.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weekly-edit',
  templateUrl: './weekly-edit.component.html',
  styleUrls: ['./weekly-edit.component.css']
})
export class WeeklyEditComponent implements OnInit {

  weekly = {};
  
    constructor(private weeklyService: WeeklyService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getWeekly(this.route.snapshot.params['id']);
    }
  
    getWeekly(id) {
      this.weeklyService.showWeekly(id).then((res) => {
        this.weekly = res;
        console.log(this.weekly);
      }, (err) => {
        console.log(err);
      });
    }
  
    updateWeekly(id) {
      this.weeklyService.updateWeekly(id, this.weekly).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/weekly-details', id]);
      }, (err) => {
        console.log(err);
      });
    }

}
