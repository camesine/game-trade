import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cart } from '../interfaces/carta'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InventoryService {

  public CartaSeleccionada: Cart

  constructor(private http: Http) {
    this.CartaSeleccionada = {
      categoria: null,
      descripcion: null,
      imagen: null,
      nombre: null
    }
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
