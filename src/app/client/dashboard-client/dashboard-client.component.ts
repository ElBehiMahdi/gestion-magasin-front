import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {

  addForm!: FormGroup;
  client: Client = new Client();
  clientData!: any;
  list!: Client[];
  public name = "Espace Client-Esprit-Mag © 2021";


  constructor(private formbuilder: FormBuilder, private apic: ClientService,
    private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.list = [{ idClient: 2, nom: "Ariana", prenom: "Grande", dateNaissance: "02/12/2015", email: "a.grande@gmail.com", categorieclient: "premium", profession: "cadre", phone: 98123456, cin: 17145123 }]
  }


  ngOnInit(): void {
    this.apic.retrieveAllClients().subscribe((data) => { this.list = data })
    this.refreshList();
  }
  refreshList() {
    this.apic.retrieveAllClients().subscribe(
      response => { this.list = response; }

    );
  }
  onDelete(idClient: number) {
    if (window.confirm('Are you sure you want to delete this user?')) {
      this.apic.deleteClient(idClient).subscribe(data => {
        console.log(data);
        this.toastr.warning('Data successfully deleted!');
        this.refreshList();
      },
        error => console.log(error));
    }
  }

}
