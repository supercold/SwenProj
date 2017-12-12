import { Component, OnInit } from '@angular/core';
import { HousekeepingreportService } from 'app/housekeepingreport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-housekeepingreport-create',
  templateUrl: './housekeepingreport-create.component.html',
  styleUrls: ['./housekeepingreport-create.component.css']
})
export class HousekeepingreportCreateComponent implements OnInit {

  housekeeping = {};
  
    constructor(private housekeepingService: HousekeepingreportService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveHousekeeping() {
      this.housekeepingService.saveHousekeeping(this.housekeeping).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/housekeeping-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
}
