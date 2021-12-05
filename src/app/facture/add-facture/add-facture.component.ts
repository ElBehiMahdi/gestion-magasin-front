import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FactureService } from 'src/app/services/facture.service';
 import{ToastrService} from 'ngx-toastr'
import { Facture } from 'src/model/facture';
import { detailFacture } from 'src/model/DetailFacture';
import { Product } from 'src/model/Products';
@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  toastr: any;
  form!:FormGroup;
facture=new Facture();
detailfacture=new detailFacture();
produit=new Product();
   
  constructor( private fb:FormBuilder,private s:FactureService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      idClient :[''],
      pourcentageRemise : [''],
      qte : [''],
      idProduit : ['']

    })

  }
  getidClient(){
    return this.form.get('idClient');
  }
  getpourcentageRemise(){
    return this.form.get('pourcentageRemise');
  }
  getqte(){
    return this.form.get('qte');
  }
  getidProduit(){
    return this.form.get('idProduit');
  }
save(){
  console.log(this.form.value.pourcentageRemise)
  console.log(this.facture)
  this.produit.idProduit=this.form.value.idProduit;
  this.detailfacture.produit=this.produit;
  this.detailfacture.pourcentageRemise=this.form.value.pourcentageRemise;
  this.detailfacture.Qte=this.form.value.qte;
  /*this.facture.detailFactures=[this.detailfacture];*/
  this.s.addfacture(this.facture,this.form.value.idClient).subscribe(
    (data)=>{
      console.log(data)
    }

  )}
  
    /*if(this.crudApi.choixmenu =='A')
    {this.infoForm()};

  }
  infoForm(){
    this.crudApi.dataform=this.fb.group({
      idFacture : ['',[Validators.required]],
    montantRemise:  ['',[Validators.required],[Validators.minLength(12)]],
    montantFacture:  ['',[Validators.required],[Validators.minLength(12)]],
    dateFacture !:   ['',[Validators.required],[Validators.minLength(12)]],
    active :  ['',[Validators.required]],
    });

  }

  ResetForm(){
    this.crudApi.dataForm?.reset();
  }

  onSubmit(){
     if(this.crudApi.choixmenu=='A')
     {
    this.addData();}
    else{
      this.updateData();
    }
  }
  addData(){
    this.crudApi.createData(this.crudApi.dataForm?.value).subscribe(data=>{
      this.toastr.success('ajout fait avec success') ;
    this.ResetForm() ;  });
  }
updateData(){
  this.crudApi.updatedata(this.crudApi.dataForm?.value.id , this.crudApi.dataForm?.value).subscribe(data=>{
    this.toastr.success('ajout fait avec success') ;
  })
}


  
  /*savefacture() {
    const data = {
      title: this.facture.id,
      description: this.facture.description
    };

    this.FactureService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },*/
       /* error => {
          console.log(error);
        });
  }

  newfacture() {
    this.submitted = false;
    this.facture = {
      id: '',
      description: '',
      published: false
    };*/
  

}
