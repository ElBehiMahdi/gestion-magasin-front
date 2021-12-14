import { Client } from "./Client";


export class Facture {
  idDetailProduit!: number;
  montantRemise!: number;
  montantFacture!: number;
  dateFacture!: Date;
  active!: Boolean;
   
 
 /*constructor(idFacture:number,montantRemise:number,montantFacture:number,dateFacture:Date,active:boolean,client:Client){
   this.idFacture=idFacture;
   this. montantRemise= montantRemise;
   this. montantFacture= montantFacture;
   this.dateFacture= dateFacture;
   this.active=active;
   this.client=client;


 }*/
}