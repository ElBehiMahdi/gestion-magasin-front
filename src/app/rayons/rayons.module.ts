import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RayonsComponent } from './rayons.component';
import { RayonAddComponent } from './rayon-add/rayon-add.component';
import { RayonEditComponent } from './rayon-edit/rayon-edit.component';
import { RayonListComponent } from './rayon-list/rayon-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';



const routes: Routes = [
  { path: '', 
  component: RayonsComponent,
  },
  { path: 'add', 
    component:RayonAddComponent,
  },
  { path: 'edit/:id', 
    component: RayonEditComponent,
  },
  { path: 'list', 
    component: RayonListComponent,
  }
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
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexModule,
    RouterModule.forChild(routes),
    DragDropModule
  ]
})
export class RayonsModule { }
