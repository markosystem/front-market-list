import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComprasModule } from './components/dashboard-compras/dashboard-compras.module';
import { FormComprasModule } from './components/form-compras/form-compras.module';
import { ListaComprasModule } from './components/lista-compras/lista-compras.module';
import { ComprasRoutingModule } from './compras-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComprasRoutingModule,
    DashboardComprasModule,
    FormComprasModule,
    ListaComprasModule
  ]
})
export class ComprasModule { }
