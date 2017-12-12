import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HousekeepingreportService } from 'app/housekeepingreport.service';

@Component({
  selector: 'app-housekeepingreport-edit',
  templateUrl: './housekeepingreport-edit.component.html',
  styleUrls: ['./housekeepingreport-edit.component.css']
})
export class HousekeepingreportEditComponent implements OnInit {

  housekeeping = {};
  
    constructor(private housekeepingService: HousekeepingreportService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getHousekeeping(this.route.snapshot.params['id']);
    }
  
    getHousekeeping(id) {
      this.housekeepingService.showHousekeeping(id).then((res) => {
        this.housekeeping = res;
        console.log(this.housekeeping);
      }, (err) => {
        console.log(err);
      });
    }
  
    updateHousekeeping(id) {
      this.housekeepingService.updateHousekeeping(id, this.housekeeping).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/housekeeping-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
}
