import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';

@NgModule({
  imports: [
    CabecalhoModule,
    CommonModule
  ]
})

export class CoreModule { }
