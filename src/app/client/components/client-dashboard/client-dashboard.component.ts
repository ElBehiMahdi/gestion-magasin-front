import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from "ngx-toastr";
import { Client } from 'src/app/models/Client';
import { ApiCService } from 'src/app/client/components/shared/api-c.service';
@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  addForm! : FormGroup;
  client: Client = new Client();
  clientData!: any;
  list!: Client [];
 /* clients!: Client[];
  list:Client[]=[]*/

  constructor(private formbuilder: FormBuilder, private api: ApiCService, 
    private router: Router, private route:ActivatedRoute, private toastr : ToastrService) { }


  ngOnInit(): void {
    this.api.retrieveAllClients().subscribe((data)=>{this.list= data})
    this.refreshList();
    }
    refreshList(){
      this.api.retrieveAllClients().subscribe(
        response =>{this.list = response;}

      );
    }
    onDelete(idClient: number)
    {
      if(window.confirm('Are you sure you want to delete this user?')){
        this.api.deleteClient(idClient).subscribe(data=>{console.log(data); 
        this.toastr.warning('Data successfully deleted!'); 
        this.refreshList();
    },
    error => console.log(error));
    }
    }

    onUpdate(idClientUpdate:number, c:Client)
    { 
      c.idClient=idClientUpdate;
      this.api.updateClient(c).subscribe(
        res => {console.log(res);})
    }
 
  }
