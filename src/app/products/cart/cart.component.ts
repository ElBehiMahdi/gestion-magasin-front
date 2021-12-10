import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/Products';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: cartItem[] = [];
  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: any) => {
      console.log(product)
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.idProduit) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        id: product.idProduit,
        productId: product.idProduit,
        productLibelle: product.libelle,
        productCode: product.code,
        qty: 1,
        price: product.prixUnitaire
      })
    }

    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
      
}
