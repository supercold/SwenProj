import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomstatusreportService {

  constructor(private http: Http) { }
  
    getAllStatuss() {
      return new Promise((resolve, reject) => {
        this.http.get('/status')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  
    showStatus(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/status/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }
  
    saveStatus(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/status', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    updateStatus(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/status/'+id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    deleteStatus(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/status/'+id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
}
