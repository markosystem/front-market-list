import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormMercadosComponent } from './components/form-mercados/form-mercados.component';
import { ListaMercadosComponent } from './components/lista-mercados/lista-mercados.component';

@NgModule({
  declarations: [
    ListaMercadosComponent,
    FormMercadosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MercadosModule { }
