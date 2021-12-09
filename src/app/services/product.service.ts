import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { productImage } from 'src/app/models/product-image'
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models/Products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  proxy = environment.gateway + "/produit";

  formData!: productImage;

  constructor(private httpClient: HttpClient,
  private angularFirestore: AngularFirestore) { }

  



  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.proxy + '/retrieve-all-produits')
  }

  createProduct(account: Object, idRayon: Number, idStock: Number): Observable<Object> {
    return this.httpClient.post(this.proxy + '/add-produit/' + idRayon + '/' + idStock, account);
  }

  getProduct(id: number): Observable<any> {
    return this.httpClient.get(this.proxy + '/retrieve-produit/' + id);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(this.proxy + '/remove-produit/' + id);
  }

  updateProduct(value: any): Observable<Object> {
    return this.httpClient.put(this.proxy + '/modify-produit', value);
  }




  //product-images with firebase
  
  createProductImage(data:any) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("product-image-collection")
        .add(data)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  getProductImage(id : any){
    return this.angularFirestore
    .collection('product-image-collection')
    .doc(id)
    .snapshotChanges();
  }

  getProductImageList() { 
    return this.angularFirestore
    .collection("product-image-collection")
    .snapshotChanges();
  }

  // getLinkByPID(id: number) {
  //   return this.angularFirestore
  //   .collection("product-image-collection")
  //   .doc(id)    
  //   .snapshotChanges();
  // }

  deleteProductImage(productImage: productImage) {
    return this.angularFirestore
      .collection("product-image-collection")
      .doc(productImage.id)
      .delete();
  }

  updateProductImage(productImage: productImage, id : any) {
    return this.angularFirestore
      .collection("product-image-collection")
      .doc(id)
      .update({
        idProduit: productImage.idProduit,
        Link: productImage.Link,
      });
  }

}

