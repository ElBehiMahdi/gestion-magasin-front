import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList!: Product[];
  categorie!: string;

  constructor(private router: Router,
  ) { }

  ngOnInit(): void {

  }

  goToList() {
    this.router.navigate(['/products/listp']);
  }
}
