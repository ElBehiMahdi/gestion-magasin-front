import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ApiCService } from '../shared/api-c.service';



@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  
    client:Client = new Client();

  constructor(private formBuilder: FormBuilder, private apic: ApiCService, private router: Router, private act : ActivatedRoute) { }

  ngOnInit(): void {
     
      
}
  onSubmit(){
    this.apic.addClient(this.signupForm.value).subscribe( data =>{
      console.log(data);
      this.goToClientList();
    },
    error => console.log(error));
  }

  signupForm= this.formBuilder.group(
    {
    idClient: ['',
     [Validators.required]],

    nom: ['',
     [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
     
    prenom: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
    dateNaissance: ['', [Validators.required]],
    email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
    categorieclient: ['', [Validators.required]],
    profession: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{8}?')]],
    cin : ['', [Validators.required]],
})

  goToClientList(){
    this.router.navigate(['/client']);
  }
  
  get idClient(){
    return this.signupForm.get('idClient') as FormArray;
  
  }

get nom()
  {
    return this.signupForm.get('nom');
  }

  get prenom()
  {
    return this.signupForm.get('prenom');
  }

  get dateNaissance()
  {
    return this.signupForm.get('dateNaissance');
  }

  get email()
  {
    return this.signupForm.get('email');
  }

  get categorieclient()
  {
    return this.signupForm.get('categorieclient');
  }

  get profession()
  {
    return this.signupForm.get('profession');
  }
  
  get phone()
  {
    return this.signupForm.get('phone');
  }

  get cin()
  {
    return this.signupForm.get('cin');
  }


  
 get form(){
   return this.signupForm;
 }

 
}
