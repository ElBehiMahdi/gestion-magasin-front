import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityComponent } from './security/security.component';


@NgModule({
  declarations: [
    ClientDashboardComponent,
    CreateClientComponent,
    UpdateClientComponent,
    SecurityComponent,
  
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
