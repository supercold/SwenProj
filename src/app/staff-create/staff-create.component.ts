import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service'

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {

  staff = {};
  
    constructor(private staffService: StaffService, private router: Router) { }
  
    ngOnInit() {
    }
  
    saveStaff() {
      this.staffService.saveStaff(this.staff).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/staff-details', id]);
      }, (err) => {
        console.log(err);
      });
    }
}
