import { Product } from "./Products"
import { Stock } from "./Stock"

export class cartItem {
    id!: number
    productId!: number
    libelle!: string
    productLibelle!: string
    qty!: number
    price!: number
    stock !: Stock

    constructor(id: number, product: Product, qty = 1) {
        this.id = id;
        this.productId = product.idProduit;
        this.libelle = product.libelle;
        this.price = product.prixUnitaire;
        this.qty = qty;
        this.stock = product.stock;
      }
}
