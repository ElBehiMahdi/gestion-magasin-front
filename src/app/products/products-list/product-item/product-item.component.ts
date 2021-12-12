import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { Stock } from 'src/app/models/Stock';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { MessengerService } from 'src/app/services/messenger.service'
import { ProductService } from 'src/app/services/product.service';
import { StocksService } from 'src/app/services/stocks.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  Product!: any

  @Input()
  productItem!: Product;

  @Input() added: boolean = false;

  constructor(private msg: MessengerService,
    private cartService: CartItemsService,
    private wishlistService: WishlistService,
    private stocksService : StocksService,
    private productService : ProductService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    console.log(this.productItem)
    this.productService.getProduct(this.productItem.idProduit).subscribe(data => {
      this.Product = data;
      this.removeFromStock(this.Product.stock);
    }, error => console.log(error));
    
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

  removeFromStock(s : Stock){
    s.qte= s.qte - 1;
    s.qteSold= s.qteSold + 1;
     
    this.stocksService.updateStock(s)
      .subscribe(data => console.log(data));

  }

}
