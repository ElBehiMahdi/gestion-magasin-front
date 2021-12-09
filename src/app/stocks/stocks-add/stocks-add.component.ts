import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock';
import { StocksService } from 'src/app/services/stocks.service';

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
      qte: new FormControl('',[Validators.pattern("[0-9]")])
    })
  }

  save(){
    this.stockService.createStock(this.stockForm.value).subscribe(data => {
      console.log(data)
    });
  }

  afficheList(){
    this.router.navigate(['/stocks/lists']);
  }

  Submit(){
    this.submit = true;
    this.save();
    this.afficheList();
  }
}
