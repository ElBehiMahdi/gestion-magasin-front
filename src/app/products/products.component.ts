import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList!: Product[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
