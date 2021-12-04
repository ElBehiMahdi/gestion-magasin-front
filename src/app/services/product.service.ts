import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from 'src/model/Products';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  proxy = environment.gateway + "/produit";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.proxy + '/retrieve-all-produits')
  }

  createProduct(account: Object, idRayon: Number, idStock: Number): Observable<Object> {
    return this.httpClient.post(this.proxy + '/add-produit/' + idRayon + '/' + idStock, account);
  }

  getProduct(id: number): Observable<any> {
    return this.httpClient.get(this.proxy + '/retrieve-produit/' + id);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(this.proxy + '/remove-produit/' + id);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.httpClient.put(this.proxy + '/modify-produit' + id, value);
  }

}

