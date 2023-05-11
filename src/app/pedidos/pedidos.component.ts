import { Component, OnInit } from '@angular/core';
import { Service } from '../services.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  Pedidos: any[] = [];

  constructor(private service: Service) {}

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos() {
    this.service.getPedidos().subscribe((data) => {
      this.Pedidos = data;
    }, () => {
      console.log('erro 404');
    });
  }

  confirmarEntrega(codPedido: number) {
    const mudou = {
      CodPedido: codPedido,
      NovoStatus: 9,
      Obs: '[VENDEDOR] Pedido disponível para transporte'
    };

    this.service.mudarStatusPedido(mudou).subscribe(() => {
      this.getPedidos();
    }, () => {
      console.log('erro ao mudar o status');
    });
  }

}

