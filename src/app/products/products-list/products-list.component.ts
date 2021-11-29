import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  //List of emplyee objects created, initilaized to EMpty.
  product!: Product[];
  constructor() { }

  ngOnInit(): void {
    this.product = [];

  }

}
