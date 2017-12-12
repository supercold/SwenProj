import { Component, OnInit } from '@angular/core';
import { RoomstatusreportService } from 'app/roomstatusreport.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roomstatusreport-detail',
  templateUrl: './roomstatusreport-detail.component.html',
  styleUrls: ['./roomstatusreport-detail.component.css']
})
export class RoomstatusreportDetailComponent implements OnInit {

  status = {};
  
    constructor(private router: Router, private route: ActivatedRoute, private statusService: RoomstatusreportService) { }
  
    ngOnInit() {
      this.getStatusDetail(this.route.snapshot.params['id']);
    }
  
    getStatusDetail(id) {
      this.statusService.showStatus(id).then((res) => {
        this.status = res;
        console.log(this.status);
      }, (err) => {
        console.log(err);
      });
    }
  
    deleteStatus(id) {
      this.statusService.deleteStatus(id).then((result) => {
        this.router.navigate(['/statuss']);
      }, (err) => {
        console.log(err);
      });
    }

}
