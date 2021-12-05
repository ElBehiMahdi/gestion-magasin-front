import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Facture } from 'src/app/models/facture';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class FactureService {
  proxy = environment.gateway + "/facture";

  constructor(private  http:HttpClient) { }
  private _getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return header;
  }

  addfacture(data: any, id: any): Observable<Object> {
    return this.http.post(this.proxy + '/add-facture/' + id, data);
  }

  AllFactures(){
    return this.http.get(this.proxy+'/retrieve-all-factures');
  }
}