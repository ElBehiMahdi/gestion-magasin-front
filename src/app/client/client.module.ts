import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { SharedComponent } from './components/shared/shared.component';


@NgModule({
  declarations: [
    ClientDashboardComponent,
    CreateClientComponent,
    UpdateClientComponent,
  
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedComponent
  ]
})
export class ClientModule { }
