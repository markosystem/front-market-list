import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    MarcasRoutingModule,
    FormsModule
  ], 
  exports:[
    MarcasRoutingModule
  ]
})
export class MarcasModule { }
