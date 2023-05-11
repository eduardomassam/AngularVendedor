import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Service } from '../services.service';

@Component({
  selector: 'app-hist-pedido',
  templateUrl: './hist-pedido.component.html',
  styleUrls: ['./hist-pedido.component.scss']
})
export class HistPedidoComponent implements OnInit{
  Pedidos: any[] = [];
  constructor(private service: Service) {}


  ngOnInit() {
    this.histPedidos();
  }


  histPedidos() {
    this.service.histPedidos().subscribe((data) => {
      this.Pedidos = data;
    }, () => {
      console.log('erro 404');
    });
  }

}
