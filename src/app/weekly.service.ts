import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeeklyService {

  constructor(private http: Http) { }
  
    getAllWeeklys() {
      return new Promise((resolve, reject) => {
        this.http.get('/weekly')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  
    showWeekly(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/weekly/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }
  
    saveWeekly(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/weekly', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    updateWeekly(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/weekly/'+id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    deleteWeekly(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/weekly/'+id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  

}
