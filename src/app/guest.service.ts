import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GuestService {

  constructor(private http: Http) { }
  
    getAllGuests() {
      return new Promise((resolve, reject) => {
        this.http.get('/guest')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  
    showGuest(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/guest/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }
  
    saveGuest(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/guest', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    updateGuest(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/guest/'+id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    deleteGuest(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/guest/'+id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

}
