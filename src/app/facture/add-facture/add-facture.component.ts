import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
 
import{render} from 'creditcardpayments/creditCardPayments'
import { Facture } from 'src/app/models/facture';
import { FactureService } from '../sh/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  factureForm!: FormGroup;
  listfacture!: Facture[];
 
  constructor( private factureService: FactureService,private fb: FormBuilder) { 
    render({
      id:"#myPaypalButtons",
      currency:"USD",
      value:"100.00",
      onApprove:(details)=>{
        alert("transaction is successful");
      }
    });
  }
  show = false;
 


  ngOnInit(): void {
   //ajout
   this.factureForm = this.fb.group({
    raison:[''],
   
    montantRemise :[''],
    montantFacture : [''],
    dateFacture : [''],
    active :[''],
   
   
   
     
    });
   
   
    //affichage facture
    this.factureService.AllFacture().subscribe(facture => this.listfacture = facture);
     
     
   
     
     

}
       //delete
  delete(id: number) {
    this.factureService.delete(id).subscribe();
    this.ngOnInit();
  }
  update(id: number,data:any) {
    this.factureService.update(id,data).subscribe();
    this.ngOnInit();
  }
    //ajout
    handelSubmit() {
      this.factureService.addFacture(this.factureForm.value).subscribe();
      this.ngOnInit();
      window.location.reload();
    }
}
