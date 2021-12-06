import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit {
  public productImageForm: FormGroup;

  constructor(
    public productService: ProductService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.productImageForm = this.formBuilder.group({
      idProduit: [''],
      Link: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productService.createProductImage(this.productImageForm.value);
    this.router.navigate(['']);
  };
}
