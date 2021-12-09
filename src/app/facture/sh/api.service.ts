import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'
 import{Facture} from 'src/app/models/facture'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  http:HttpClient) { }
  postFacture(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res ;
    }))
  } 
 
  getFacture(){
   return this.http.get<any>("http://localhost:3000/posts")
   .pipe(map((res:any)=>{
     return res ;
   }))
 } 
 updateFacture(data:any,id:number){
   return this.http.put<any>("http://localhost:3000/posts/"+id,data)
   .pipe(map((res:any)=>{
     return res ;
   }))
 } 
 deleteFacture(id:number){
   return this.http.delete<any>("http://localhost:3000/posts/"+id)
   .pipe(map((res:any)=>{
     return res ;
   }))
 }
}

