import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProdutosComponent } from './components/form-produtos/form-produtos.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';



@NgModule({
  declarations: [FormProdutosComponent, ListaProdutosComponent],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }
