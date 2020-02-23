import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CabecalhoComponent } from './cabecalho.component';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  exports: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class CabecalhoModule { }
