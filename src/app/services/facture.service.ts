import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Facture } from 'src/model/facture';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class FactureService {
    /*private baseUrl = '/api/facture';
choixmenu: string = 'A';
public dataForm: FormGroup | undefined ; 

  constructor(private http: HttpClient) { }

  getAll() : Observable<Object>{
    return this.http.get(this.baseUrl);
  }

  getData(id: number) : Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createData(info: Object) : Observable<Object>{
    return this.http.post(this.baseUrl, info);
  }

  updatedata(id: number , value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number) : Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  deleteAll() {
    return this.http.delete(this.baseUrl);
  }

  findById(id: number) {
    return this.http.get(`${this.baseUrl}?title=${id}`);
  }*/
  baseurl=environment.gateway;

  constructor(private  http:HttpClient) { }
  private _getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return header;
  }
  addfacture(data:any,id:any){

    return this.http.post(' //http://localhost:8081/SpringMVC/facture/add-facture/1'+id,data);
  }


  AllFactures(){
    return this.http.get(this.baseurl+'facture/retrieve-all-factures');
  }
}