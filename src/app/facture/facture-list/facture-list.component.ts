import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { render } from 'creditcardpayments/creditCardPayments'
import { ToastrService } from 'ngx-toastr';
import { Facture } from 'src/app/models/facture';
import { FactureService } from '../sh/facture.service';
import { FactureModel } from './facture.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';








@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css'],
  providers: [DatePipe]
})

export class FactureListComponent implements OnInit {
  dateFacture: any;
  factureForm!: FormGroup;
  listfacture!: Facture[];
  myAbgularxQrCode: any;
  factureModelObj: FactureModel = new FactureModel();
  factureData !: any;
  fact: Facture[] = [];
  totalRecords: number = 5;
  dateToday: number | undefined;
  total: any;

  public name = "Magasin Esprit 2021";
  message = "";


  constructor(private factureService: FactureService, private fb: FormBuilder, private toastr: ToastrService,private route: ActivatedRoute,private datePipe: DatePipe) {

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
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  colorier(t: any) {
    if (t % 2 == 0)
      return "red";
    return "blue";

  }
  totalLength: any;
  page: number = 1;


  show = false;

  showToastr() {
    this.toastr.success('Some messages', 'title');
  }

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
  Search() {
    if (this.dateFacture == "") {
      this.ngOnInit();
    } else {
      this.fact = this.fact.filter(res => {
        return res.dateFacture.toLocaleDateString().match(this.dateFacture.toLocaleLowerCase());
      });
    }
  }
  key: string = 'idDetailProduit';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;


  }
  //delete
  delete(id: number) {
    this.factureService.delete(id).subscribe(res => {
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




  update(id: number, data: any) {
    this.factureService.update(id, data).subscribe();
    this.ngOnInit();
  }
  //ajout
  handelSubmit() {
    this.factureService.addFacture(this.factureForm.value).subscribe(res => {
      console.log(res);
      alert('facture Ajouté')
    });

    this.ngOnInit();
    window.location.reload();
  }













  postFactureDetails() {




    this.factureModelObj.montantRemise = this.factureForm.value.montantRemise;
    this.factureModelObj.montantFacture = this.factureForm.value.montantFacture;
    this.factureModelObj.dateFacture = this.factureForm.value.dateFacture;
    this.factureModelObj.active = this.factureForm.value.active;
    this.factureService.postFacture(this.factureModelObj)
    alert('facture Ajoutée')
    
  }

  getAll() {
    this.factureService.getFacture()
      .subscribe(res => {
        this.factureData = res;
      })
  }
  deleteFact(fac: any) {
    this.factureService.deleteFacture(fac.id).subscribe(res => {
      alert("facture effacee")
    })
  }
}



