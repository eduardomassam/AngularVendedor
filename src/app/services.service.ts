import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


//const API_URL = 'https://localhost:7259/';

const httpOptions = {
   headers: new HttpHeaders({
   'Content-Type':  'application/json'
   })
  };

@Injectable({
  providedIn: 'root'
})
export class Service {
  private apiUrl = 'https://localhost:7259/';

  constructor(private http: HttpClient) { }

  public getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'api/vendas/ListarPedidosStatus/1');
  }

  public histPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'api/vendas/ListarPedidos');
  }


  mudarStatusPedido(mudou: any) {
    const url = `${this.apiUrl}api/vendas/MudarStatusPedido`;
    return this.http.post(url, mudou);
  }

}
  // public getDetalhesPedidos (){
  //   return this.http.get(API_URL + '/api/vendas/BuscarHistorico/').pipe(
  //      map(extrairDados));
  // }

  // public postConfEnvio(dados){
  //   return this.http.post<any>(API_URL + '/api/vendas/MudarStatusPedido', JSON.stringify(dados), httpOptions).pipe(
  //      catchError(this.handleError<any>('createPessoa')));
  // }

  //  public postCancelarPedido (dados){
  //   return this.http.post<any>(API_URL + '/api/vendas/CancelarPedido', JSON.stringify(dados), httpOptions).pipe(
  //      catchError(this.handleError<any>('createPessoa')));
  //  }

