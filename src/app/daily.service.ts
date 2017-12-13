import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DailyService {

  constructor(private http: Http) { }
  
    getAllDailys() {
      return new Promise((resolve, reject) => {
        this.http.get('/daily')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  
    showDaily(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/daily/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }
  
    saveDaily(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/daily', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    updateDaily(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/daily/'+id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    deleteDaily(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/daily/'+id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  }
