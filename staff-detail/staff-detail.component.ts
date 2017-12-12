import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css']
})
export class StaffDetailComponent implements OnInit {

  staff = {};  

  constructor(private route: ActivatedRoute, private staffService: StaffService, private router: Router) { }

  ngOnInit() {
    this.getStaffDetail(this.route.snapshot.params['id']);
  }

  getStaffDetail(id) {
    this.staffService.showStaff(id).then((res) => {
      this.staff = res;
      console.log(this.staff);
    }, (err) => {
      console.log(err);
    });
  }
  deleteStaff(id) {
    this.staffService.deleteStaff(id).then((result) => {
      this.router.navigate(['/staffs']);
    }, (err) => {
      console.log(err);
    });
  }

}
