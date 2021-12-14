import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/Stock';
import { StocksService } from 'src/app/services/stocks.service';
declare var google:any;

@Component({
  selector: 'app-chart-stock',
  templateUrl: './chart-stock.component.html',
  styleUrls: ['./chart-stock.component.css']
})
export class ChartStockComponent implements OnInit {
  private stocks !: Stock[];

  constructor(private stockService: StocksService) { }

  ngOnInit(): void {
    this.stockService.getStockList().subscribe((data)=>{
      this.stocks = data;
    })
    google.charts.load('current', {packages: ['corechart']});
    this.buildChart(this.stocks);
  }
  buildChart(stocks : Stock[]){
    var func=(chart:any)=>{
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      stocks.forEach(item=>{
        data.addRows([
          [item.libelle,item.qteSold]
        ]);
      });
      
    var options ={
      title:'Stocks vendus',
    };
    chart().draw(data,options);
    }
    var chart =()=> new google.visualization.PieChart(document.getElementById('divPieChart'));
    var callback=()=>func(chart);
    google.charts.setOnLoadCallback(callback);
  }
  /*drawChart(){
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1], 
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);
    var options ={
      title:'Stocks vendus',
    };
    var chart = new google.visualization.PieChart(document.getElementById('divPieChart'));
    chart.draw(data, options);
  }*/

}
