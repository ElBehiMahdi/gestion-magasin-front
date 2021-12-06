import { detailFacture } from "./detailFacture";

export class Facture {
    idFacture! : number;
    montantRemise!: number ;
    montantFacture!: number;
    dateFacture !: string;
    active !: boolean;
    detailFacture!: detailFacture;
   
}