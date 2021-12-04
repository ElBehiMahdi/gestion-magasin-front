import { detailFacture } from "./DetailFacture";

export class Facture {
    idFacture! : number;
    montantRemise!: number ;
    montantFacture!: number;
    dateFacture !: string;
    active !: boolean;
    detailFacture!: detailFacture;
   
}