import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";

import { EditFactureComponent } from './facture/edit-facture/edit-facture.component';

import { FactureModule } from './facture/facture.module';

import { FormBuilder } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './services/product.service';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormComponent } from './shared/form/form.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResponsiveToolbarComponent } from './shared/responsive-toolbar/responsive-toolbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FilterProdPipe } from './products/filter-prod.pipe';
import { MatTableModule } from '@angular/material/table';




const routesf: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products', loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'facture', loadChildren: () =>
      import('./facture/facture.module').then(m => m.FactureModule)
  },
  {
    path: 'stocks', loadChildren: () =>
      import('./stocks/stocks.module').then(m => m.StocksModule)
  },
  {
    path: 'dashboard', loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'client', loadChildren: () =>
      import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'rayons', loadChildren: () =>
      import('./rayons/rayons.module').then(m => m.RayonsModule)
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    PageNotFoundComponent,
    FormComponent,
    ResponsiveToolbarComponent,
    SidebarComponent,
    


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routesf),
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ProductService],//, JwtClientService in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
