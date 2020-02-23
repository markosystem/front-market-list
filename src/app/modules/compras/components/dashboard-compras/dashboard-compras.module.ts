import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComprasComponent } from './dashboard-compras.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComprasComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class DashboardComprasModule { }
