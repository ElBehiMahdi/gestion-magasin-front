import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { cartItem } from 'src/app/models/cart-item'
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { cartUrl } from '../shared/config/api';
import { Product } from '../models/Products';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  constructor(private httpClient: HttpClient) { }

  getCartItemList(): Observable<cartItem[]> {
    return this.httpClient.get<cartItem[]>(cartUrl).pipe(
      map((result: any[]) => {

        let cartItems: cartItem[] = [];
        
        for(let item of result){
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.idProduit) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }
  
          if (!productExists) {
            cartItems.push(
              new cartItem(item.id, item.product)
            )
          }
        }
        
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.httpClient.post(cartUrl, { product });
  }

  deleteCartItem(id: string){
    return this.httpClient.delete(cartUrl + '/' + id).subscribe(data => {
      console.log(data)
    });
  }
}
