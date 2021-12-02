import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { StocksAddComponent } from './stocks-add/stocks-add.component';
import { StocksEditComponent } from './stocks-edit/stocks-edit.component';
import { StocksDeleteComponent } from './stocks-delete/stocks-delete.component';


const routes: Routes = [
  { path: '', component: StocksComponent }
];

@NgModule({
  declarations: [
    StocksComponent,
    StocksListComponent,
    StocksAddComponent,
    StocksEditComponent,
    StocksDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StocksModule { }
