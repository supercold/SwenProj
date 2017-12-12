import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ScheduleService {

  constructor(private http: Http) { }

  getAllSchedules() {
    return new Promise((resolve, reject) => {
      this.http.get('/schedule')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSchedule(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/schedule/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveSchedule(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/schedule', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateSchedule(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/schedule/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteSchedule(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/Schedule/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
