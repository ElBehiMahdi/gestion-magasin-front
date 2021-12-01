import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loading=false;
  succes=false;
  f= this.fb.group({
    code:['',[Validators.required]],
    libelle:['',[Validators.required]],
    prix:['',[Validators.required,Validators.pattern("[0-9]")]]
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getcode(){
    return this.f.get('code');
  }

  getlibelle(){
    return this.f.get('libelle');
  }
  getprix(){
    return this.f.get('prix');
  }

  submit(){
    this.loading= true;
  }
}
