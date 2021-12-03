import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from '../facture.component';
import { RouterModule, Routes } from '@angular/router';

import { AddFactureComponent } from '../add-facture/add-facture.component';
import { FactureListComponent } from '../facture-list/facture-list.component';
import { EditFactureComponent } from '../edit-facture/edit-facture.component';

import { from } from 'rxjs';

 
const routes: Routes = [
  {path :'',component:FactureComponent},
  {
    path: 'addf', // child route path
    component: AddFactureComponent, // child route component that the router renders
  },
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
  declarations: [
    FactureComponent,
    AddFactureComponent,
    FactureListComponent,
    EditFactureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
     
 
  exports: [RouterModule]
})
export class FactureModule { }
