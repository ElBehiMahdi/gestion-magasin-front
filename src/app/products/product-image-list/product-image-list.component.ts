import { Component, OnInit } from '@angular/core';
import { productImage } from 'src/app/models/product-image';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-image-list',
  templateUrl: './product-image-list.component.html',
  styleUrls: ['./product-image-list.component.css']
})
export class ProductImageListComponent implements OnInit {
  productImage!: productImage[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductImageList().subscribe(res => {
      this.productImage = res.map(e => {
        return {
        } as productImage;
      })

    });
  }

  removeProductImage = (productImage: productImage) => this.productService.deleteProductImage(productImage);

}
