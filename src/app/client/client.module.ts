import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GoogleChartsModule } from 'angular-google-charts';

import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientComponent } from './client.component';
import { FooterClientComponent } from './footer-client/footer-client.component';
import { StatClientComponent } from './stat-client/stat-client.component';


const routesc: Routes = [

  {
    path: '',
    component: DashboardClientComponent
  },

  {
    path: 'createClient',
    component: AddClientComponent
  },
  {
    path: 'updateClient/:id',
    component: EditClientComponent
  },
  {
      path:'statClient',
      component: StatClientComponent
  }
];

@NgModule({
  declarations: [
    ClientComponent,
    AddClientComponent,
    EditClientComponent,
    FooterClientComponent,
    DashboardClientComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesc),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleChartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [RouterModule]
})
export class ClientModule { }
