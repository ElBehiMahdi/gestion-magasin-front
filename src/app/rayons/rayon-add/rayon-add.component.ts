import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RayonsService } from 'src/app/services/rayons.service';

@Component({
  selector: 'app-rayon-add',
  templateUrl: './rayon-add.component.html',
  styleUrls: ['./rayon-add.component.css']
})
export class RayonAddComponent implements OnInit {
  f !: FormGroup;
  constructor(private fb : FormBuilder, private router : Router, private rayonService : RayonsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.f = this.fb.group({
      code : new FormControl('',Validators.required),
      libelle : new FormControl('',Validators.required)
    });
  }

  affList(){
    this.router.navigate(['/rayons/list']);
  }

  Submit(){
    this.affList();
    this.rayonService.createRayon(this.f.value).subscribe(data => {
      console.log(data)});
  }

}
