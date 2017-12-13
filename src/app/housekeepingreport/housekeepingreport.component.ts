import { Component, OnInit } from '@angular/core';
import { HousekeepingreportService } from 'app/housekeepingreport.service';

@Component({
  selector: 'app-housekeepingreport',
  templateUrl: './housekeepingreport.component.html',
  styleUrls: ['./housekeepingreport.component.css']
})
export class HousekeepingreportComponent implements OnInit {

  housekeepings: any;  
  
    constructor(private housekeepingService: HousekeepingreportService) { }
  
    ngOnInit() {
      this.getHousekeepingList();
    }
  
    getHousekeepingList() {
      this.housekeepingService.getAllHousekeepings().then((res) => {
        this.housekeepings = res;
      }, (err) => {
        console.log(err);
      });
    }
  
}
