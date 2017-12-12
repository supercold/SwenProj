import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffs: any;  

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.getStaffList();
  }

  getStaffList() {
    this.staffService.getAllStaff().then((res) => {
      this.staffs = res;
    }, (err) => {
      console.log(err);
    });
  }

}
