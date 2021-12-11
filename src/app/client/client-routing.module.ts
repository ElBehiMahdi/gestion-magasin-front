import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';

const routes: Routes = [

  {path: 'client', component: ClientDashboardComponent},
  {path:'', redirectTo:'client', pathMatch:'full'},//pathMatch is recommended when we configure an empty path
  {path:'createClient', component: CreateClientComponent},
  {path: 'updateClient/:idClient', component: UpdateClientComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
