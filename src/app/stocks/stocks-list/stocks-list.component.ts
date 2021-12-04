import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { Stock } from 'src/model/Stock';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  stockList !: Stock[];
  constructor(private stocksService : StocksService) { }

  ngOnInit(): void {
    this.stocksService.getStockList().subscribe((data)=>{
      this.stockList = data;
    })
  }

}
