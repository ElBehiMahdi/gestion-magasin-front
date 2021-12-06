import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Products';

@Component({
  selector: 'app-products-admin-list',
  templateUrl: './products-admin-list.component.html',
  styleUrls: ['./products-admin-list.component.css']
})
export class ProductsAdminListComponent implements OnInit {

  //List of emplyee objects created, initilaized to EMpty.
  productList!: Product[];
  constructor(
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  updateProduit(id: number) {
    this.router.navigate(['detailp', id]);
  }

  deleteProduit(id: number) {
    if (confirm('Are you sure to delete this product ?')) {
      this.productService.deleteProduct(id)
        .subscribe(
          data => {
            console.log(data);
            this.getProduct();
          },
          error => console.log(error));
    }
  }

  getProduct() {
    return this.productService.getProductList().subscribe((data) => {
      this.productList = data;
    })
  }

}
