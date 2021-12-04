import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  
  constructor(private fb: FormBuilder, private stockService: StocksService,private router: Router) { }

  ngOnInit(): void {
    this.initStockForm();
  }

  initStockForm(){
    this.stockForm = new FormGroup({
      qteMin: new FormControl('',[Validators.required,Validators.pattern("[0-9]")]),
      libelle:  new FormControl('', Validators.required),
      qte: new FormControl('',[Validators.required,Validators.pattern("[0-9]")])
    })
  }

  save(){
    this.stockService.createStock(this.stock).subscribe();
  }

  getQteMin(){
    return this.stockForm.get('qteMin');
  }

  getQte(){
    return this.stockForm.get('qte');
  }

  getlibelle(){
    return this.stockForm.get('libelle');
  }

  afficheList(){
    this.router.navigate(['/stocks/lists']);
  }

  Submit(){
    this.submit = true;
    
    console.log(this.stock.libelle);
    this.afficheList();
  }
}
