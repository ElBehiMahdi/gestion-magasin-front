import { Component, Input, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/cart-item';
import { CartItemsService } from 'src/app/services/cart-items.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  cartItems: cartItem[] = [];

  @Input() cartItem: any
  constructor(private cartService: CartItemsService) { }

  ngOnInit(): void {
  }

  removeCart(id:string){
    this.cartService.deleteCartItem(id);
    window.location.reload();
  }

}
