import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ModalDialogModule } from '../utils/modal-dialog.module';
import { FormMarcasComponent } from './components/form-marcas/form-marcas.component';
import { ListaMarcasComponent } from './components/lista-marcas/lista-marcas.component';
import { MarcasRoutingModule } from './marcas-routing.module';

@NgModule({
  declarations: [
    FormMarcasComponent,
    ListaMarcasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MarcasRoutingModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ModalDialogModule,
    MatGridListModule
  ]
})
export class MarcasModule { }
