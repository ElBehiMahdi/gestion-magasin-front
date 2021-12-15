import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client!: Client;
  id!: number;
  submitted = false;
  clientForm!: FormGroup;



  constructor(private formBuilder: FormBuilder, private apic: ClientService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.client = new Client;
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    // this.client.idClient = this.idClient;
    this.apic.retrieveClientById(this.id)
      .subscribe(data => {
        console.log(data + "min")
        this.client = data;
      }, error => console.log(error));
    this.initClientForm();
    //   this.api.retrieveClientById(this.idClient).subscribe((data) => {
    //     this.client = data;
    //   }, error => console.log(error));

    // }
  }
  initClientForm() {
    this.clientForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      dateNaissance: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      categorieclient: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      cin: new FormControl('', Validators.required)
    })
  }


  onSubmit() {
    this.submitted = true;
    if (this.clientForm.invalid) {
      console.log("invalid");
      return 'invlalid credentials';
    }
    else {
      return 'success';
      this.updateClient();
      this.cancel();
    }
  }

  goToClientList() {
    this.router.navigate(['/client']);
  }

  updateClient() {
    if (confirm('Are you sure to modify this client ?')) {
      this.apic.updateClient(this.client)
        .subscribe(data => console.log(data));
      this.client = new Client();
      this.goToClientList();
    }
  }

  cancel() {
    this.goToClientList();
  }
}
