import { Component, OnInit } from '@angular/core';
import { MonthlyService } from 'app/monthly.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-create',
  templateUrl: './monthly-create.component.html',
  styleUrls: ['./monthly-create.component.css']
})
export class MonthlyCreateComponent implements OnInit {

  monthly = {};
  
    constructor(private monthlyService: MonthlyService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveMonthly() {
      this.monthlyService.saveMonthly(this.monthly).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/monthly-details', id]);
      }, (err) => {
        console.log(err);
      });
    }

}
