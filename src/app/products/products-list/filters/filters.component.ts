import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  public searchTerm : string = '';

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    //console.log(this.searchTerm);
    this.productService.search.next(this.searchTerm)
  }
}
