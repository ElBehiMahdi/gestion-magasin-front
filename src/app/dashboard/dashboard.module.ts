import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartStockComponent } from './chart-stock/chart-stock.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ChartStockComponent,    
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    RouterModule.forChild(routes),
    GoogleChartsModule 
  ]
})
export class DashboardModule {
}
