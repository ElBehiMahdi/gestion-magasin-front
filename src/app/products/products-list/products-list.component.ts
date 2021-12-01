import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/model/Products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  //icons
  faEye = faEye
  //List of emplyee objects created, initilaized to EMpty.
  productList!: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((data)=>{
      this.productList = data;
    })
  }

}
