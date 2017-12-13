import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YearlyService } from 'app/yearly.service';

@Component({
  selector: 'app-yearly-detail',
  templateUrl: './yearly-detail.component.html',
  styleUrls: ['./yearly-detail.component.css']
})
export class YearlyDetailComponent implements OnInit {

  yearly = {};
  
    constructor(private router: Router, private route: ActivatedRoute, private yearlyService: YearlyService) { }
  
    ngOnInit() {
      this.getYearlyDetail(this.route.snapshot.params['id']);
    }
  
    getYearlyDetail(id) {
      this.yearlyService.showYearly(id).then((res) => {
        this.yearly = res;
        console.log(this.yearly);
      }, (err) => {
        console.log(err);
      });
    }
  
    deleteYearly(id) {
      this.yearlyService.deleteYearly(id).then((result) => {
        this.router.navigate(['/yearlys']);
      }, (err) => {
        console.log(err);
      });
    }

}
