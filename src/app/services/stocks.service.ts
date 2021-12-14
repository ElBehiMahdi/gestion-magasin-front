import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from 'src/app/models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  proxy = environment.gateway + "/stock";
  
  constructor(private httpClient: HttpClient) { }
    getStockList(): Observable<Stock[]>{
      return this.httpClient.get<Stock[]>(this.proxy + '/retrieve-all-stocks')
    }

    getStockWarn(): Observable<Stock[]>{
      return this.httpClient.get<Stock[]>(this.proxy + '/warn')
    }

    createStock(account:Object): Observable<Object> {
      return this.httpClient.post(this.proxy + '/add-stock/', account);
    }

    getStock(id: number): Observable<any> {
      return this.httpClient.get(this.proxy + '/retrieve-stock/' + id);
    }
  
    deleteStock(id: number): Observable<any> {
      return this.httpClient.delete(this.proxy + '/remove-stock/' + id);
    }
  
    updateStock(value: any): Observable<Object> {
      return this.httpClient.put(this.proxy + '/modify-stock', value);
    }
}
