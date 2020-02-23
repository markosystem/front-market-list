import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMercadosComponent } from './components/form-mercados/form-mercados.component';
import { ListaMercadosComponent } from './components/lista-mercados/lista-mercados.component';

const routes: Routes = [
  { path: 'mercados/form', component: FormMercadosComponent },
  { path: 'mercados', component: ListaMercadosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MercadosRoutingModule { }
