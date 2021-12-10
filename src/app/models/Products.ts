import { detailProduit } from "./detalProduit";
import { Rayon } from "./Rayon";
import { Stock } from "./Stock";

export class Product{
    idProduit !: number;
    code !: string;
    libelle !:string;
    prixUnitaire !:number;
    categorieProduit !: string;
    detailProduit !: detailProduit;
    rayon !: Rayon;
    stock !: Stock;
} 