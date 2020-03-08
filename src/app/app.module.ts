import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/app-routing.module';
import { CabecalhoModule } from './core/components/cabecalho/cabecalho.module';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { CoreModule } from './core/core.module';
import { ComprasRoutingModule } from './modules/compras/compras-routing.module';
import { ComprasModule } from './modules/compras/compras.module';
import { MarcasRoutingModule } from './modules/marcas/marcas-routing.module';
import { MarcasModule } from './modules/marcas/marcas.module';
import { MercadosRoutingModule } from './modules/mercados/mercados-routing.module';
import { ProdutosRoutingModule } from './modules/produtos/produtos-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    MarcasModule,
    ComprasModule,
    CabecalhoModule,
    AppRoutingModule,
    MarcasRoutingModule,
    ComprasRoutingModule,
    MercadosRoutingModule,
    ProdutosRoutingModule,
    MatSnackBarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
