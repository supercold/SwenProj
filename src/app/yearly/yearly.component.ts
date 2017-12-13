import { Component, OnInit } from '@angular/core';
import { YearlyService } from 'app/yearly.service';

@Component({
  selector: 'app-yearly',
  templateUrl: './yearly.component.html',
  styleUrls: ['./yearly.component.css']
})
export class YearlyComponent implements OnInit {


  yearlys: any;  
  
    constructor(private yearlyService: YearlyService) { }
  
    ngOnInit() {
      this.getYearlyList();
    }
  
    getYearlyList() {
      this.yearlyService.getAllYearlys().then((res) => {
        this.yearlys = res;
      }, (err) => {
        console.log(err);
      });
    }
  

}
