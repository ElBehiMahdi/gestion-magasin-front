import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Products';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  public updateProductForm!: FormGroup;
  id!: number;
  submitted = false;
  product!: Product;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];

    this.productService.getProduct(this.id)
      .subscribe(data => {
        this.product = data;
      }, error => console.log(error));

    this.initProductForm();
  }

  initProductForm() {
    this.updateProductForm = new FormGroup({
      idProduit: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      libelle: new FormControl('', Validators.required),
      prixUnitaire: new FormControl('', Validators.required),
      categorieProduit: new FormControl('', Validators.required),
    })
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.updateProductForm.controls[controlName].hasError(errorName);
  }

  updateProduct() {
    this.productService.updateProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateProductForm.invalid) {
      console.log("invalid");
      return 'invlalid credentials';
    }else{
      return 'success'
      this.updateProduct();
      this.onClose();
    }
  }

  onClose() {
    this.goToList();
    //this.dialogRef.close();
  }

  goToList() {
    this.router.navigate(['/products/listp']);
  }

}
