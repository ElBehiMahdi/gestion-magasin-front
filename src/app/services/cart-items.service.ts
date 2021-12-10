import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { cartItem } from 'src/app/models/cart-item'
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  formData!: cartItem;
  constructor(private httpClient: HttpClient,
    private angularFirestore: AngularFirestore) { }

  getCartItemList() {
    return this.angularFirestore
      .collection("cart-item-collection")
      .snapshotChanges();
  }
}
