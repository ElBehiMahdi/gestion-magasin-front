import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StocksService } from 'src/app/services/stocks.service';
import { Stock } from 'src/model/Stock';

@Component({
  selector: 'app-stocks-add',
  templateUrl: './stocks-add.component.html',
  styleUrls: ['./stocks-add.component.css']
})
export class StocksAddComponent implements OnInit {
  submit = false;
  stockList !: Stock[];
  stockForm !: FormGroup;
  stock !: Stock;
  
  constructor(private fb: FormBuilder, private stockService: StocksService) { }

  ngOnInit(): void {
    this.initStockForm();
  }

  initStockForm(){
    this.stockForm = new FormGroup({
      code: new FormControl('',Validators.required),
      libelle:  new FormControl('', Validators.required)
    })
  }

  save(){
    this.stockService.createStock(this.stock).subscribe();
  }

  getcode(){
    return this.stockForm.get('code');
  }

  getlibelle(){
    return this.stockForm.get('libelle');
  }

  Submit(){
    this.submit = true;
    this.save();
  }
}
