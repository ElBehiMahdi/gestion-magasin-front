import { isNgTemplate } from '@angular/compiler';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/Products';
import { Stock } from 'src/app/models/Stock';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: cartItem[] = [];
  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartItemsService
  ) { }

  ngOnInit() { 
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: any) => {
      this.loadCartItems();
    })
  }

  loadCartItems(){
    this.cartService.getCartItemList().subscribe((items: cartItem[]) => {
      this.cartItems = items;
      this.calcTotal()
    })
  }
  
  calcTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  
      
}
