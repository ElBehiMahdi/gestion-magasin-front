import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from './facture.component';
import { RouterModule, Routes } from '@angular/router';

 

import { EditFactureComponent } from './edit-facture/edit-facture.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { from } from 'rxjs';
import { FactureListComponent } from './facture-list/facture-list.component';
import { FooterComponent } from './footer/footer.component';
import { QRCodeModule } from 'angularx-qrcode';
 
 


const routes: Routes = [
  { path: '', component: FactureComponent },
   
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
    FactureListComponent,
    EditFactureComponent,
    FooterComponent,
     
    
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QRCodeModule
    /*FormBuilder,*/
  ],

  exports: [RouterModule]
})
export class FactureModule { }
