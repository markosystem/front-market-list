import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMarcasComponent } from './components/form-marcas/form-marcas.component';
import { ListaMarcasComponent } from './components/lista-marcas/lista-marcas.component';

const routes: Routes = [
  { path: 'marcas/form', component: FormMarcasComponent },
  { path: 'marcas', component: ListaMarcasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
