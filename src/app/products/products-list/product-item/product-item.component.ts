import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { MessengerService } from 'src/app/services/messenger.service'
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;

  @Input() added: boolean = false;

  constructor(private msg: MessengerService,
    private cartService: CartItemsService,
    private wishlistService: WishlistService,) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

  handleAddToWishlist(){
    this.wishlistService.addToWishlist(this.productItem.idProduit).subscribe(() => {
      this.added = true;
    })
  }

  handleRemoveFromWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.idProduit).subscribe(() => {
      this.added = false;
    })
  }

}
