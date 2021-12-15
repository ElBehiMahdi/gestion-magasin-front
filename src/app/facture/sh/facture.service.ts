import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from 'src/app/models/facture';
import{map}from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }
 
  url: string = 'http://localhost:8089/SpringMVC/facture/'
  
  
  public AllFacture(): Observable<Facture[]> {

    return this.http.get<Facture[]>(this.url + 'retrieve-all-factures')
     .pipe(map((res:any)=>{
      return res ;
    }))
  }
  public delete(id: number) {
    return this.http.get<Facture>(this.url + 'cancel-facture/' + id)
    .pipe(map((res:any)=>{
      return res ;
    }));
  }
  public addFacture(facture: Facture) {

    return this.http.post<Facture>(this.url + 'add-facture', facture)
    .pipe(map((res:any)=>{
      return res ;
    }));
  }
  public update(data:any,id:number) {
    return this.http.put<Facture>(this.url + 'modify-facture' + id,data)
    .pipe(map((res:any)=>{
      return res ;
    }));
  }
  
  
  













  
  postFacture(data:any){
    return this.http.post<any>(" 'http://localhost:8089/SpringMVC/facture",data)
    .pipe(map((res:any)=>{
      return res ;
    }))
  } 
 
  getFacture(){
   return this.http.get<any>("http://localhost:8089/SpringMVC/facture")
   .pipe(map((res:any)=>{
     return res ;
   }))
 } 
 updateFacture(data:any,id:number){
   return this.http.put<any>(" http://localhost:8089/SpringMVC/facture/"+id,data)
   .pipe(map((res:any)=>{
     return res ;
   }))
 } 
 deleteFacture(id:number){
   return this.http.delete<any>(" http://localhost:8089/SpringMVC/facture/"+id)
   .pipe(map((res:any)=>{
     return res ;
   }))
 }

}
