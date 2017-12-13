import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YearlyService {

  constructor(private http: Http) { }
  
    getAllYearlys() {
      return new Promise((resolve, reject) => {
        this.http.get('/yearly')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  
    showYearly(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/yearly/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }
  
    saveYearly(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/yearly', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    updateYearly(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/yearly/'+id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    deleteYearly(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/yearly/'+id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

}
