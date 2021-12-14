import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productImage } from 'src/app/models/product-image';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show-product-image',
  templateUrl: './show-product-image.component.html',
  styleUrls: ['./show-product-image.component.css']
})
export class ShowProductImageComponent implements OnInit {

  public productImageForm: FormGroup;
  imageRef: any
  list?: productImage[];

  constructor(
    public ps: ProductService,
    public fb: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.productImageForm = this.fb.group({
      Link: [''],
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.ps.getProductImage(id).subscribe(res => {
      this.imageRef = res
      this.productImageForm = this.fb.group({
        Link: [this.imageRef.Link],
      })      
    })
  }
}
