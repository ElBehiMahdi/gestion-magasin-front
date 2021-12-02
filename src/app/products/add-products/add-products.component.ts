import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../model/Products";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  private idRayon!: number;
  private idStock!: number;
  public createProductForm!: FormGroup;
  product: Product = new Product();
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  hide = true;

  constructor(

    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
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
      this.router.navigate(['/products/listp'])
    })
  }


  // @ts-ignore
  onSubmit() {
    this.submitted = true;
    if (this.createProductForm.invalid) {
      console.log("invalid");
      return 'invlalid credentials';
    } else {
      this.save(this.idRayon,this.idStock);
      this.goToList();
    }
  }

  onClose() {
    this.goToList();
    //this.dialogRef.close();
  }

  goToList() {
    this.router.navigate(['/products/listp'])
  }
}
