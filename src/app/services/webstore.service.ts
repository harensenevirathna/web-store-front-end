import {Injectable} from '@angular/core';
import {properties} from '../web/api';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebstoreService {

  constructor(private http: HttpClient) {

  }

  public loadProducts() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<any>(`${properties.url}/webstore/product`, httpOptions);
  }

  public getPriceList(productParam) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(`${properties.url}/webstore/prices`, productParam, httpOptions);
  }

  public getPriceForItem(cartItem) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(`${properties.url}/webstore/itemprice`, cartItem, httpOptions);
  }

  public setMyCartToLocalStore(mycart) {
    return localStorage.setItem('mycart', JSON.stringify(mycart));
  }

  public static getMyCartFromLocalStore() {
    return localStorage.getItem('mycart');
  }

  public static removeMyCartFromLocalStore() {
    return localStorage.removeItem('mycart');
  }

  public static arraySearch(nameKey, myCart) {
    for (var i = 0; i < myCart.length; i++) {
      console.log(myCart[i].id);
      if (myCart[i].id === nameKey) {
        return myCart[i];
      }
    }
  }
}
