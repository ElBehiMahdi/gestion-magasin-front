import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
 
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FactureModel } from './facture.model';
 import { ApiService } from '../sh/api.service';
 import { FactureSService } from 'src/app/services/api.service';
import { Facture } from 'src/app/models/facture';
 
@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {
   formValue!: FormGroup;
   FactureModelObj: FactureModel=new FactureModel();
   factureData !:any;
   showAdd!:boolean;
   showUpdate!:boolean;
  
  
  constructor(private Formbuilder: FormBuilder,private api:ApiService) { }
   
  
  ngOnInit(): void {
this.formValue= this.Formbuilder.group({
         Nom :[''],
        idClient:[ ],
        dateFacture:[''],
        active:[''],
        idProduit:[''],
        Quantité :[''],
        montantFacture :[''],
        montantRemise :[''],



})
    this.geyAllFacture();
   /* this.AllFactures();*/

  }
  cliclAddFacture(){
    this.formValue.reset();
    this.showAdd =true;
    this.showUpdate=false;

  }
  postFactureDetail(){
    this.FactureModelObj.Nom=this.formValue.value.Nom;
    this.FactureModelObj.prenom=this.formValue.value.prenom;
    this.FactureModelObj.idClient=this.formValue.value.idClient;
    this.FactureModelObj.dateFacture=this.formValue.value.dateFacture;
    this.FactureModelObj.active=this.formValue.value.active;
    this.FactureModelObj.idProduit=this.formValue.value.idProduit;
    this.FactureModelObj.Quantité=this.formValue.value.Quantité;
    this.FactureModelObj.montantFacture=this.formValue.value.montantFacture;
    this.FactureModelObj.montantRemise=this.formValue.value.montantRemise;

    this.api.postFacture(this.FactureModelObj).subscribe( res=>{
      console.log(res);
      alert('facture ajoutée avec succes')
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.geyAllFacture();

    },
    err=>{
      alert('Une erreur est survenu');
    })
  }
  geyAllFacture(){
    this.api.getFacture().subscribe(res=>{
      this.factureData=res;
    })
    
  }
  deleteFacture(row:any){
    this.api.deleteFacture(row.id)
    .subscribe(res=>{
      alert("Facture supprimée") 
      this.geyAllFacture();
    })
 
  }
  onEdit(row:any){
    this.showAdd =false;
    this.showUpdate=true;
    this.FactureModelObj.id=row.id;
    this.formValue.controls['Nom'].setValue(row.Nom);
    this.formValue.controls['idClient'].setValue(row.idClient);
    this.formValue.controls['dateFacture'].setValue(row.dateFacture);
    this.formValue.controls['active'].setValue(row.active);
    this.formValue.controls['idProduit'].setValue(row.idProduit);
    this.formValue.controls['montantFacture'].setValue(row.montantFacture);
    this.formValue.controls['montantRemise'].setValue(row.montantRemise);

  }
  updateFactureDetail(){
    this.FactureModelObj.Nom=this.formValue.value.Nom;
    this.FactureModelObj.prenom=this.formValue.value.prenom;
    this.FactureModelObj.idClient=this.formValue.value.idClient;
    this.FactureModelObj.dateFacture=this.formValue.value.dateFacture;
    this.FactureModelObj.active=this.formValue.value.active;
    this.FactureModelObj.idProduit=this.formValue.value.idProduit;
    this.FactureModelObj.Quantité=this.formValue.value.Quantité;
    this.FactureModelObj.montantFacture=this.formValue.value.montantFacture;
    this.FactureModelObj.montantRemise=this.formValue.value.montantRemise;
    this.api.updateFacture(this.FactureModelObj, this.FactureModelObj.id).subscribe(
      res=>{
        alert("Mise a jour effectuer");
        let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.geyAllFacture();
      }
    )
  }
   
 /* AllFactures(){
    this.fs.AllFactures().subscribe(
      (d)=>{
        console.log(d)
        /*this.listfacture =d;*/
    /*  }*/
   /* )
  }  */

  /*retrieveFacture() {
    this.factureService.getAll()
      .subscribe(
        data => {
          this.facture = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveFacture();
    this.currentfacture = null;
    this.currentIndex = -1;
  }

  setActiveFacture(facture: any, index: number) {
    this.currentfacture = facture;
    this.currentIndex = index;
  }

  removeAllFacture() {
    this.factureService.deleteAll()
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.retrieveFacture();
        },
        (        error: any) => {
          console.log(error);
        });
  }

  /*searchId() {
    this.factureService.findById(this.value)
      .subscribe(
        (        data: any) => {
          this.facture = data;
          console.log(data);
        },
        (        error: any) => {
          console.log(error);
        });
  }*/

}
