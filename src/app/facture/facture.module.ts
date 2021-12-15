import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from './facture.component';
import { RouterModule, Routes } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { EditFactureComponent } from './edit-facture/edit-facture.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { FactureListComponent } from './facture-list/facture-list.component';
import { FooterComponent } from './footer/footer.component';
import { QRCodeModule } from 'angularx-qrcode';
import { RemarqueComponent } from './remarque/remarque.component';
import { FactureService } from './sh/facture.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';





const routes: Routes = [
  { path: '', component: FactureComponent },

  {
    path: 'editf',
    component: EditFactureComponent, // another child route component that the router renders
  },
  {
    path: 'listf',
    component: FactureListComponent,// another child route component that the router renders
  },
];
@NgModule({
  declarations: [
    FactureComponent,
    FactureListComponent,
    EditFactureComponent,
    FooterComponent,
    RemarqueComponent,



  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QRCodeModule,
     Ng2SearchPipeModule,
     Ng2OrderModule

    /*FormBuilder,*/
  ],

  exports: [RouterModule]
})
export class FactureModule { }
