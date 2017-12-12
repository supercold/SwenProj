import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HousekeepingreportService } from 'app/housekeepingreport.service';

@Component({
  selector: 'app-housekeepingreport-detail',
  templateUrl: './housekeepingreport-detail.component.html',
  styleUrls: ['./housekeepingreport-detail.component.css']
})
export class HousekeepingreportDetailComponent implements OnInit {

  housekeeping = {};
  
    constructor(private router: Router, private route: ActivatedRoute, private housekeepingreportService: HousekeepingreportService) { }
  
    ngOnInit() {
      this.getHousekeepingDetail(this.route.snapshot.params['id']);
    }
  
    getHousekeepingDetail(id) {
      this.housekeepingreportService.showHousekeeping(id).then((res) => {
        this.housekeeping = res;
        console.log(this.housekeeping);
      }, (err) => {
        console.log(err);
      });
    }
  
    deleteHousekeeping(id) {
      this.housekeepingreportService.deleteHousekeeping(id).then((result) => {
        this.router.navigate(['/housekeepings']);
      }, (err) => {
        console.log(err);
      });
    }

}
