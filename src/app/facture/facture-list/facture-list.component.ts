import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { Facture } from 'src/app/models/facture';
 
@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {
   
  listfacture:any=[];
  constructor(private fs: FactureService) { }
   
  
  ngOnInit(): void {
    this.AllFactures();

  }
  AllFactures(){
    this.fs.AllFactures().subscribe(
      (d)=>{
        console.log(d)
        /*this.listfacture =d;*/
      }
    )
  }
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
