import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/Client';

@Injectable({
  providedIn: 'root'
})
export class ApiCService {

  constructor(private http: HttpClient) { }

  retrieveClientById(idClient: number): Observable<Client>
  {
    return this.http.get<Client>("http://localhost:8095/SpringMVC/client/fetch/" + idClient);
  }

  retrieveAllClients(): Observable<Client[]>
  {
    return this.http.get<Client[]>("http://localhost:8095/SpringMVC/client/all");
  }

  addClient(client: Client): Observable<Client>
  {
    return this.http.post<Client>("http://localhost:8095/SpringMVC/client/add/", client);
  }

  updateClient(client: Client): Observable<Client>
  {
    return this.http.put<Client>("http://localhost:8095/SpringMVC/client/update/", client);
  }

  updateClientById(idClient: number, client: Client): Observable<Client>
  {
    return this.http.put<Client>("http://localhost:8095/SpringMVC/client/update/" + idClient, client);
  
  }

  deleteClient(idClient: number): Observable<void>
  {
    return this.http.delete<void>("http://localhost:8095/SpringMVC/client/delete/"+ idClient);
  }

  clientProfessionStats(prof:string): Observable<any>
  {
    return this.http.get<number>("http://localhost:8095/clientProfessionPourcentage/"+prof);
  }
  
}