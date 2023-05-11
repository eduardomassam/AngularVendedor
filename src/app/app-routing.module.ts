import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { StatusPedidoComponent } from './status-pedido/status-pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HistPedidoComponent } from './hist-pedido/hist-pedido.component';
import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: 'Pedidos/novosPedidos', component: PedidosComponent},
  {path: 'usuario/Cadastro', component: UsuarioComponent},
  {path: 'status-pedido/alterarStatus', component: StatusPedidoComponent},
  {path: 'hist-pedido', component: HistPedidoComponent},
  {path: 'Cancelar-Pedido', component: CancelarPedidoComponent},
  {path: '404', component: ErrorComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
