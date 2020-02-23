import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComprasComponent } from './components/dashboard-compras/dashboard-compras.component';
import { FormComprasComponent } from './components/form-compras/form-compras.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';


const routes: Routes = [
  { path: 'compras/dashboard', component: DashboardComprasComponent },
  { path: 'compras/form', component: FormComprasComponent },
  { path: 'compras', component: ListaComprasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
