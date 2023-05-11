import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status-pedido',
  templateUrl: './status-pedido.component.html',
  styleUrls: ['./status-pedido.component.scss']
})
export class StatusPedidoComponent {

  public urlApi: string = "https://localhost:7259/api/vendas/MudarStatusPedido/";
  
    
  }



