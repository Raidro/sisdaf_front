import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ModeloService{

private readonly URL_BUSCA_TODOS = `${environment.apiUrl}/modelos`;
private readonly URL_SALVA_OPM = `${environment.apiUrl}/modelos`;

constructor(private http: HttpClient) {}

//busca todas as modelos

  buscaTodos(): Promise<any>{
    return this.http.get(this.URL_BUSCA_TODOS)
    .toPromise();

  }

  //salva modelo
  salvaModelo(modelo: any): Promise <any> {
    return this.http.post(this.URL_SALVA_OPM, modelo).toPromise();
  }

}
