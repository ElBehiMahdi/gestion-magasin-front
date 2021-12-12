import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { MessengerService } from 'src/app/services/messenger.service'
import { StocksService } from 'src/app/services/stocks.service';
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
    private wishlistService: WishlistService,
    private stocksService : StocksService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.removeFromStock(this.productItem);
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

  removeFromStock(p : Product){
    p.stock.qte= p.stock.qte - 1;
    p.stock.qteSold= p.stock.qteSold + 1;
     
    this.stocksService.updateStock(p.stock)
      .subscribe(data => console.log(data));

  }

}
