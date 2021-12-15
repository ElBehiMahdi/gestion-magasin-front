import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Products';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-admin-list',
  templateUrl: './products-admin-list.component.html',
  styleUrls: ['./products-admin-list.component.css']
})
export class ProductsAdminListComponent implements OnInit {

  //List of emplyee objects created, initilaized to EMpty.
  productList!: Observable<Product[]>;
  constructor(
    private router: Router,
    private productService: ProductService,
    private dialog: MatDialog) { }

  dataSource!: MatTableDataSource<any>
  displayedColumns: string[] = ['code', 'libelle', 'prixUnitaire', 'categorieProduit','Actions'];

  ngOnInit(): void {
    this.getProduct();
    console.log(this.dataSource)
  }

  addProduct() {
    this.router.navigate(['products/addp']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateProduit(id: number) {
    this.router.navigate(['products/detailp', id]);
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
    return this.productService.getProductList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource.data.length);
      console.log(this.dataSource);
      return this.dataSource
    })
  }

}
