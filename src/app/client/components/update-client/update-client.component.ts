import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ApiCService } from '../shared/api-c.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  @Input()client! : Client;
  EditClientRegisterForm! : FormGroup;
  @Input() chosenClientId! : number;
  @Output() hideEditForm = new EventEmitter<boolean>(); 
 


  constructor(private apic: ApiCService, private router : Router) { }

  ngOnInit(): void {

    console.log(this.client);
    this.EditClientRegisterForm = new FormGroup({
      email : new FormControl('',[Validators.required]),
      categorieclient : new FormControl('',[Validators.required]),
      profession : new FormControl('',[Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{8}")])
    });
  }

  editClient(){
    this.apic.updateClient(this.client).subscribe(
      () => {
        this.hideEditForm.emit(false);
      });

    }
}
