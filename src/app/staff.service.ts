import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StaffService {

  constructor(private http: Http) { }

  getAllStaff() {
    return new Promise((resolve, reject) => {
      this.http.get('/staff')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showStaff(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/staff/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveStaff(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/staff', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateStaff(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/staff/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteStaff(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/staff/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}

