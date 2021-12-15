import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductImageComponent } from './add-product-image/add-product-image.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { DetailProductsComponent } from './detail-products/detail-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { FiltersComponent } from './products-list/filters/filters.component';
import { ProductImageListComponent } from './product-image-list/product-image-list.component';
import { ProductsAdminListComponent } from './products-admin-list/products-admin-list.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';
import { ShowProductImageComponent } from './show-product-image/show-product-image.component';
import { FilterProdPipe } from './filter-prod.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

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
    path: 'listp',
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
    FiltersComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    FilterProdPipe,
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
    MatChipsModule,
    MatListModule,
    MatRippleModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
