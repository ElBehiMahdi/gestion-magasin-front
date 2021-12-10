import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from 'src/app/models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }
 
  url: string = 'http://localhost:8089/SpringMVC/facture/'
  public AllFacture(): Observable<Facture[]> {

    return this.http.get<Facture[]>(this.url + 'retrieve-all-factures');
  }
  public delete(id: number) {
    return this.http.delete<Facture>(this.url + 'cancel-facture/' + id);
  }
  public addFacture(facture: Facture) {

    return this.http.post<Facture>(this.url + 'add-facture', facture);
  }
  public update(data:any,id:number) {
    return this.http.put<Facture>(this.url + 'modify-facture/' + id,data);
  }
}
