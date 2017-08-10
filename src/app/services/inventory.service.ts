import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InventoryService {

  constructor(private http: Http) {
    console.log("ENTRO")
  }

  getCartas() {
    const url = '/assets/cartas.json';
    return this.http.get(url)
    .toPromise()
    .then(response => response.json())
    .catch(this.error)
  }

  error(error: any) {
    return Promise.reject(error.message || error);
  }

}
