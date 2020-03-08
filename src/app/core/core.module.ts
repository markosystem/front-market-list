import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CabecalhoModule,
    CommonModule
  ],
  declarations: [PageNotFoundComponent]
})

export class CoreModule { }
