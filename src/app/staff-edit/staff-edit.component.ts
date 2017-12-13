import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {

  staff = {};

  constructor(private staffService: StaffService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStaff(this.route.snapshot.params['id']);
  }

  getStaff(id) {
    this.staffService.showStaff(id).then((res) => {
      this.staff = res;
      console.log(this.staff);
    }, (err) => {
      console.log(err);
    });
  }

  updateStaff(id) {
    this.staffService.updateStaff(id, this.staff).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/staff-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}
