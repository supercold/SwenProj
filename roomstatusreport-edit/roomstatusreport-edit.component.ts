import { Component, OnInit } from '@angular/core';
import { RoomstatusreportService } from 'app/roomstatusreport.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roomstatusreport-edit',
  templateUrl: './roomstatusreport-edit.component.html',
  styleUrls: ['./roomstatusreport-edit.component.css']
})
export class RoomstatusreportEditComponent implements OnInit {

  status = {};
  
    constructor(private statusService: RoomstatusreportService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getStatus(this.route.snapshot.params['id']);
    }
  
    getStatus(id) {
      this.statusService.showStatus(id).then((res) => {
        this.status = res;
        console.log(this.status);
      }, (err) => {
        console.log(err);
      });
    }
  
    updateStatus(id) {
      this.statusService.updateStatus(id, this.status).then((result) => {
        let id = result['_id'];
        this.router.navigate(['/status-details', id]);
      }, (err) => {
        console.log(err);
      });
    }

}
