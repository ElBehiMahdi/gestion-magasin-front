import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks.component';


const routes: Routes = [
  { path: '', component: StocksComponent }
];

@NgModule({
  declarations: [
    StocksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StocksModule { }
