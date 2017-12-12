import { Component, OnInit } from '@angular/core';
import { MonthlyService } from 'app/monthly.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monthly-edit',
  templateUrl: './monthly-edit.component.html',
  styleUrls: ['./monthly-edit.component.css']
})
export class MonthlyEditComponent implements OnInit {

  monthly = {};
  
    constructor(private monthlyService: MonthlyService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getMonthly(this.route.snapshot.params['id']);
    }
  
    getMonthly(id) {
      this.monthlyService.showMonthly(id).then((res) => {
        this.monthly = res;
        console.log(this.monthly);
      }, (err) => {
        console.log(err);
      });
    }
  
    updateMonthly(id) {
      this.monthlyService.updateMonthly(id, this.monthly).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/monthly-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
}
