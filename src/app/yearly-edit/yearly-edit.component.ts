import { Component, OnInit } from '@angular/core';
import { YearlyService } from 'app/yearly.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yearly-edit',
  templateUrl: './yearly-edit.component.html',
  styleUrls: ['./yearly-edit.component.css']
})
export class YearlyEditComponent implements OnInit {

  yearly = {};
  
    constructor(private yearlyService: YearlyService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getYearly(this.route.snapshot.params['id']);
    }
  
    getYearly(id) {
      this.yearlyService.showYearly(id).then((res) => {
        this.yearly = res;
        console.log(this.yearly);
      }, (err) => {
        console.log(err);
      });
    }
  
    updateYearly(id) {
      this.yearlyService.updateYearly(id, this.yearly).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/yearly-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
  
}
