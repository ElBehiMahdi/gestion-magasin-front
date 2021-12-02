import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatSelectModule} from '@angular/material/select';


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
    path: 'editp',
    component: EditProductsComponent, // another child route component that the router renders
  },
  {
    path: 'listp',
    component: ProductsListComponent, // another child route component that the router renders
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductsComponent,
    ProductsListComponent,
    EditProductsComponent,
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
    MatSelectModule

  ],
  exports: [RouterModule]
})
export class ProductsModule { }
