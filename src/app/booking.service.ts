import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService {

  constructor(private http: Http) { }

  getAllBookings() {
    return new Promise((resolve, reject) => {
      this.http.get('/booking')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showBooking(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/booking/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveBooking(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/booking', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateBooking(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/booking/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteBooking(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/booking/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}