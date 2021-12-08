import { Component, OnInit } from '@angular/core';
import { productImage } from 'src/app/models/product-image';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-image-list',
  templateUrl: './product-image-list.component.html',
  styleUrls: ['./product-image-list.component.css']
})
export class ProductImageListComponent implements OnInit {
  list?: productImage[];
  categorie!: string;
  cat: any;
  route: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cat = this.route.snapshot.params['cat'];

    this.productService.getProductImageList().subscribe(actionArray => {
      this.list =actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as {}} as productImage
      })
      console.log(this.list)

    });
  }

  removeProductImage = (productImage: productImage) => this.productService.deleteProductImage(productImage);

}
