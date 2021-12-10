import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { EditFactureComponent } from './edit-facture/edit-facture.component';
import { FactureListComponent } from './facture-list/facture-list.component';
import { FactureComponent } from './facture.component';

const routes: Routes = [
  {path :'',component:FactureComponent},
   
  {
    path: 'editf',
    component: EditFactureComponent, // another child route component that the router renders
  },
  {
    path: 'listf',
    component: FactureListComponent ,// another child route component that the router renders
  },

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
