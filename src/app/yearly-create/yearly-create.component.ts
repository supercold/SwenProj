import { Component, OnInit } from '@angular/core';
import { YearlyService } from 'app/yearly.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yearly-create',
  templateUrl: './yearly-create.component.html',
  styleUrls: ['./yearly-create.component.css']
})
export class YearlyCreateComponent implements OnInit {

  yearly = {};
  
    constructor(private yearlyService: YearlyService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveYearly() {
      this.yearlyService.saveYearly(this.yearly).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/yearly-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
  }
