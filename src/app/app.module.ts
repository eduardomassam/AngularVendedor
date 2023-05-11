import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { StatusPedidoComponent } from './status-pedido/status-pedido.component';
import { HistPedidoComponent } from './hist-pedido/hist-pedido.component';
import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';
import { NavComponent } from './_shared/_layout/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PedidosComponent,
    StatusPedidoComponent,
    HistPedidoComponent,
    CancelarPedidoComponent,
    NavComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
