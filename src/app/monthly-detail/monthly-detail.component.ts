import { Component, OnInit } from '@angular/core';
import { MonthlyService } from 'app/monthly.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monthly-detail',
  templateUrl: './monthly-detail.component.html',
  styleUrls: ['./monthly-detail.component.css']
})
export class MonthlyDetailComponent implements OnInit {

  monthly = {};
  
    constructor(private router: Router, private route: ActivatedRoute, private monthlyService: MonthlyService) { }
  
    ngOnInit() {
      this.getMonthlyDetail(this.route.snapshot.params['id']);
    }
  
    getMonthlyDetail(id) {
      this.monthlyService.showMonthly(id).then((res) => {
        this.monthly = res;
        console.log(this.monthly);
      }, (err) => {
        console.log(err);
      });
    }
  
    deleteMonthly(id) {
      this.monthlyService.deleteMonthly(id).then((result) => {
        this.router.navigate(['/monthlys']);
      }, (err) => {
        console.log(err);
      });
    }

}
