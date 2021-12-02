import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rayon } from 'src/model/Rayon';

@Injectable({
  providedIn: 'root'
})
export class RayonsService {
  proxy = environment.gateway + "/rayon";
  constructor(private httpClient: HttpClient) {}
    getRayonList(): Observable<Rayon[]>{
      return this.httpClient.get<Rayon[]>(this.proxy + '/retrieve-all-rayons')
    }

    createRayon(account:Object): Observable<Object> {
      return this.httpClient.post(this.proxy + '/add-rayon/', account);
    }

    getRayon(id: number): Observable<any> {
      return this.httpClient.get(this.proxy + '/retrieve-rayon/' + id);
    }
   
}
