import { Product } from "./Products"

export class cartItem {
    id!: number
    productId!: number
    productCode!: string
    productLibelle!: string
    qty!: number
    price!: number

    constructor(id: number, product: Product, qty = 1) {
        this.id = id;
        this.productId = product.idProduit;
        this.productCode = product.code;
        this.price = product.prixUnitaire;
        this.qty = qty;
      }
}
