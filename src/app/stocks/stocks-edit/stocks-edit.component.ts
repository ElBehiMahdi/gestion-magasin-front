import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-stocks-edit',
  templateUrl: './stocks-edit.component.html',
  styleUrls: ['./stocks-edit.component.css']
})
export class StocksEditComponent implements OnInit {
  stockForm !: FormGroup;
  SubmitChanges = false;
  id !: number;
  stock !: Stock;

  constructor(private stocksService : StocksService, private fb : FormBuilder,
    private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.stock = new Stock;
    this.id= this.route.snapshot.params['id'];
    console.log(this.id);
    this.stock.idStock = this.id;
    this.stocksService.getStock(this.id)
   .subscribe(data => {
       console.log(data)
      this.stock = data;
      }, error => console.log(error));
      this.initStockForm();

      
  }

  initStockForm(){
    this.stockForm = new FormGroup({
      qteMinEdit: new FormControl('',[Validators.required,Validators.pattern("[0-9]")]),
      libelleEdit:  new FormControl('', Validators.required)
    })
  }

  updateStock() {
    if (confirm('Are you sure to modify this product ?')) {
      this.stocksService.updateStock(this.stock)
      .subscribe(data => console.log(data));
    this.stock = new Stock();
    this.router.navigate(['/stocks/lists']);
    }
  }

  cancel(){
    this.router.navigate(['/stocks/lists']);
  }
 
}
