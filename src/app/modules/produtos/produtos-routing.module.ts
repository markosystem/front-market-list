import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutosComponent } from './components/form-produtos/form-produtos.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';

const routes: Routes = [
  { path: 'produtos/form', component: FormProdutosComponent },
  { path: 'produtos', component: ListaProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
