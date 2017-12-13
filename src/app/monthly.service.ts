import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MonthlyService {

  constructor(private http: Http) { }
  
    getAllMonthlys() {
      return new Promise((resolve, reject) => {
        this.http.get('/monthly')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  
    showMonthly(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/monthly/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }
  
    saveMonthly(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/monthly', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    updateMonthly(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/monthly/'+id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    deleteMonthly(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/monthly/'+id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  

}
