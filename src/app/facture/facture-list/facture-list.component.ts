import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import{render} from 'creditcardpayments/creditCardPayments'
import { ToastrService } from 'ngx-toastr';
import { Facture } from 'src/app/models/facture';
import { FactureService } from '../sh/facture.service';
import { FactureModel } from './facture.model';

 






@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css'],
   
})

export class FactureListComponent implements OnInit {
  dateFacture: any ;
  factureForm!: FormGroup;
  listfacture!: Facture[];
  myAbgularxQrCode:any;
  factureModelObj : FactureModel =new FactureModel();
  factureData !:any;
  totalRecords: number=5;
  
  
  public name="Magasin Esprit 2021";
   message="";
  
  
  constructor( private factureService: FactureService,private fb: FormBuilder, private toastr:ToastrService) { 
   
     this.myAbgularxQrCode='Your QR code data string';
    render({
      id: "#myPaypalButtons",
      currency: "USD",
      value: "100.00",
      onApprove: (details) => {
        alert("transaction is successful");
      }
    });
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

totalLength:any ;
page:number=1;


  show = false;
 
  showToastr(){
    this.toastr.success('Some messages', 'title');
  }

  ngOnInit(): void {




   //ajout
   this.factureForm = this.fb.group({
   
   
    montantRemise :[''],
    montantFacture : [''],
    dateFacture : [''],
    active :['']
   
   
   
     
    });
    this.getAll();
   
    //affichage facture
    this.factureService.AllFacture().subscribe(facture => this.listfacture = facture);
     
     
    
     
     

}
Search(){
  if(this.dateFacture==""){
    this.ngOnInit();
  }else{
    this.listfacture=this.listfacture.filter(res=>{
      return res.dateFacture.toLocaleDateString().match(this.dateFacture.toLocaleDateString()) ;
       })
  }
}
sort(){}
       //delete
  delete(id: number) {
    this.factureService.delete(id).subscribe(res=>{
      alert("Facture Supprimée")
    });
    this.ngOnInit();
  }
  deleteFacture(id: number) {
    if (confirm('Are you sure to delete this product ?')) {
      this.factureService.delete(id)
        .subscribe(
          data => {
            console.log(data);
            this.getFacture();
          },
          error => console.log(error));
    }
  }
   
  getFacture() {
    return this.factureService.AllFacture().subscribe((data) => {
      this.listfacture = data;
    })
  }




  update(id: number,data:any) {
    this.factureService.update(id,data).subscribe();
    this.ngOnInit();
  }
    //ajout
    handelSubmit() {
      this.factureService.addFacture(this.factureForm.value).subscribe(res=>{
        console.log(res);
        alert('facture Ajouté')
      });
      
      this.ngOnInit();
      window.location.reload();
    }













    postFactureDetails(){

    


  this.factureModelObj.montantRemise=this.factureForm.value.montantRemise;
  this.factureModelObj.montantFacture=this.factureForm.value.montantFacture;
  this.factureModelObj.dateFacture =this.factureForm.value.dateFacture;
  this.factureModelObj. active =this.factureForm.value. active;
      this.factureService.postFacture(this.factureModelObj)
      .subscribe(res=>{
        console.log(res);
        alert('facture Ajoutée')
      },
      err=>{
        alert('erreur');
      })
    }

    getAll(){
      this.factureService.getFacture()
      .subscribe(res=>{
        this.factureData=res;
      })
    }
    deleteFact(fac:any){
      this.factureService.deleteFacture(fac.id).subscribe(res=>{
        alert("facture effacee")
      })
    }
}



 