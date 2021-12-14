import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


import { render } from 'creditcardpayments/creditCardPayments'
import { Facture } from 'src/app/models/facture';
import { FactureService } from '../sh/facture.service';
@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css'],
  providers: [DatePipe]
})

export class FactureListComponent implements OnInit {

  factureForm!: FormGroup;
  listfacture!: Facture[];
  myAbgularxQrCode: any;
  public name = "Magasin Esprit 2021";
  message = "";
  total: any;
  dateToday: number | undefined;

  constructor(private factureService: FactureService, private fb: FormBuilder, private route: ActivatedRoute,private datePipe: DatePipe) {
    this.myAbgularxQrCode = 'Your QR code data string';
    render({
      id: "#myPaypalButtons",
      currency: "USD",
      value: "100.00",
      onApprove: (details) => {
        alert("transaction is successful");
      }
    });
  }
  show = false;



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.total = params['cartTotal']
    })

    this.dateToday = Date.now();


    if (this.total) {
      console.log(this.total)
      //ajout bil checkout 
      this.factureForm = this.fb.group({
        raison: [''],

        montantRemise: [0],
        montantFacture: [this.total],
        dateFacture: [this.dateToday],
        active: [true],




      });
    } else {
      //ajout adiya 
      this.factureForm = this.fb.group({
        raison: [''],

        montantRemise: [''],
        montantFacture: [''],
        dateFacture: [''],
        active: [''],




      });
    }




    //affichage facture
    this.factureService.AllFacture().subscribe(facture => this.listfacture = facture);






  }
  //delete
  delete(id: number) {
    this.factureService.delete(id).subscribe();
    this.ngOnInit();
  }
  update(id: number, data: any) {
    this.factureService.update(id, data).subscribe();
    this.ngOnInit();
  }
  //ajout
  handelSubmit() {
    this.factureService.addFacture(this.factureForm.value).subscribe();
    this.ngOnInit();
    window.location.reload();
  }
}
