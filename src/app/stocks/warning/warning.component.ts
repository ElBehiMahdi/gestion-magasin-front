import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/models/Stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  warnstockList !: Stock[];
  //@Input()
  

  constructor(private stocksService: StocksService) { }

  ngOnInit(): void {
    this.stocksService.getStockWarn().subscribe((data)=>{
      this.warnstockList = data;
    })

  }



}
