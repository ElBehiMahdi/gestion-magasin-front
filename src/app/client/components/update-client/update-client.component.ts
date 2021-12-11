import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ApiCService } from '../shared/api-c.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  
  @Input() client! : Client;
  @Output() hideEditForm = new EventEmitter<boolean>();
  idClient!: number;
  imgUrl: any;
  updateForm! : FormGroup;

constructor(private formBuilder: FormBuilder, private apiC: ApiCService, private router: Router) { }
//activted route retrieves id from route
ngOnInit(): void {

    this.apiC.retrieveClientById(this.idClient).subscribe((data) =>{
      this.client= data;
    }, error => console.log(error));
    
}
onSubmit(){
  this.apiC.updateClientById(this.idClient, this.client).subscribe( data =>{
    this.goToClientList();
  },
  error => console.log(error));
}

goToClientList(){
  this.router.navigate(['/client']);
}

clientToUpdate = {

    //idClient!: number;
    nom: "",
    prenom: "",
    dateNaissance: "",
    email: "",
    categorieclient: "",
    profession: "",
    phone: "",
    cin: ""
}
onUpdate()
{ 
  const formData = new FormData();
  const client = this.clientToUpdate;
  formData.append('client', JSON.stringify(client));
}
c:Client=new Client();
}