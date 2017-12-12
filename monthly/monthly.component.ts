import { Component, OnInit } from '@angular/core';
import { MonthlyService } from 'app/monthly.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  monthlys: any;  
  
    constructor(private monthlyService: MonthlyService) { }
  
    ngOnInit() {
      this.getMonthlyList();
    }
  
    getMonthlyList() {
      this.monthlyService.getAllMonthlys().then((res) => {
        this.monthlys = res;
      }, (err) => {
        console.log(err);
      });
    }
}
