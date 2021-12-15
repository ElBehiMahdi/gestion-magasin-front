import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "src/app/models/Products";
import { RayonsService } from 'src/app/services/rayons.service';
import { Rayon } from 'src/app/models/Rayon';
import { Stock } from 'src/app/models/Stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {


  productList!: Product[];
  rayonList!: Rayon[];
  stockList!: Stock[];

  private idRayon!: number;
  private idStock!: number;
  public createProductForm!: FormGroup;
  product: Product = new Product();
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  hide = true;

  constructor(

    private productService: ProductService,
    private rayonService: RayonsService,
    private stockService: StocksService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.rayonService.getRayonList().subscribe((data)=>{
      this.rayonList = data;
    })
    this.stockService.getStockList().subscribe((data)=>{
      this.stockList = data;
    })
    this.initProductForm();

  }

  initProductForm() {
      this.createProductForm = new FormGroup({
      code: new FormControl('', Validators.required),
      libelle:  new FormControl('', Validators.required),
      prixUnitaire: new FormControl('', Validators.required),
      categorieProduit: new FormControl('',Validators.required),
    })
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.createProductForm.controls[controlName].hasError(errorName);
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save(idRayon: number, idStock: number) {
    this.productService.createProduct(this.product, idRayon, idStock).subscribe(data => {
      console.log(data, idRayon, idStock)
    })
  }

  onSelectRayon(id: number) {
    this.idRayon = id
  }

  onSelectStock(id: number) {
    this.idStock = id
  }

  onSubmit() {
    this.submitted = true;
    if (this.createProductForm.invalid) {
      console.log("invalid");
      return 'invlalid credentials';
    } else {
      console.log(this.idRayon , this.idStock)
      this.save(this.idRayon,this.idStock);
      this.goToList();
      return 'success'

    }
  }

  onClose() {
    this.goToList();
    //this.dialogRef.close();
  }

  goToList() {
    this.router.navigate(['/products/adminp'])
  }
}
