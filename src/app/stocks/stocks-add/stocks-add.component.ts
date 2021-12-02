import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Stock } from 'src/model/Stock';

@Component({
  selector: 'app-stocks-add',
  templateUrl: './stocks-add.component.html',
  styleUrls: ['./stocks-add.component.css']
})
export class StocksAddComponent implements OnInit {

  stockList !: Stock[];
  private stockForm !: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initStockForm();
  }

  initStockForm(){
    this.stockForm = new FormGroup({
      code: new FormControl('',Validators.required),
      libelle:  new FormControl('', Validators.required)
    })
  }
}
