import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FlexModule } from "@angular/flex-layout";
import { MatSelectModule } from '@angular/material/select';
import { DetailProductsComponent } from './detail-products/detail-products.component';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { ProductsAdminListComponent } from './products-admin-list/products-admin-list.component';
import { AddProductImageComponent } from './add-product-image/add-product-image.component';
import { ProductImageListComponent } from './product-image-list/product-image-list.component';
import { ShowProductImageComponent } from './show-product-image/show-product-image.component';


const routesp: Routes = [
  {
    path: '', // child route path
    component: ProductsComponent, // child route component that the router renders
  },
  {
    path: 'addp', // child route path
    component: AddProductsComponent, // child route component that the router renders
  },
  {
    path: 'editp/:id',
    component: EditProductsComponent, // another child route component that the router renders
  },
  {
    path: 'listp/:cat',
    component: ProductsListComponent, // another child route component that the router renders
  },
  {
    path: 'adminp',
    component: ProductsAdminListComponent, // another child route component that the router renders
  },
  {
    path: 'detailp/:id',
    component: DetailProductsComponent, // another child route component that the router renders
  },
  {
    path: 'addip',
    component: AddProductImageComponent, // another child route component that the router renders
  },
  {
    path: 'listip',
    component: ProductImageListComponent, // another child route component that the router renders
  },
  {
    path: 'showip/:id',
    component: ShowProductImageComponent, // another child route component that the router renders
  },

];

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductsComponent,
    ProductsListComponent,
    EditProductsComponent,
    DetailProductsComponent,
    ProductsAdminListComponent,
    AddProductImageComponent,
    ProductImageListComponent,
    ShowProductImageComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(routesp),
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    FlexModule,
    MatSelectModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
