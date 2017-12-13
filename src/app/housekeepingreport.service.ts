import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HousekeepingreportService {

  constructor(private http: Http) { }
  
    getAllHousekeepings() {
      return new Promise((resolve, reject) => {
        this.http.get('/housekeeping')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  
    showHousekeeping(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/housekeeping/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }
  
    saveHousekeeping(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/housekeeping', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    updateHousekeeping(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/housekeeping/'+id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    deleteHousekeeping(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/housekeeping/'+id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  

}
