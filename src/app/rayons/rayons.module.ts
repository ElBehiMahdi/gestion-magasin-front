import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RayonsComponent } from './rayons.component';
import { RayonAddComponent } from './rayon-add/rayon-add.component';
import { RayonEditComponent } from './rayon-edit/rayon-edit.component';
import { RayonListComponent } from './rayon-list/rayon-list.component';


const routes: Routes = [
  { path: '', component: RayonsComponent }
];

@NgModule({
  declarations: [
    RayonsComponent,
    RayonAddComponent,
    RayonEditComponent,
    RayonListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RayonsModule { }
