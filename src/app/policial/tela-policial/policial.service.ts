import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PolicialService{

private readonly URL_BUSCA_TODOS = `${environment.apiUrl}/policiais`;
private readonly URL_SALVA_POLICIAL = `${environment.apiUrl}/policiais`;

constructor(private http: HttpClient) {}

//busca todas as opms

  buscaTodos(): Promise<any>{
    return this.http.get(this.URL_BUSCA_TODOS)
    .toPromise();

  }

  //salva Opm
  salvaPolicial(policial: any): Promise <any> {
    return this.http.post(this.URL_SALVA_POLICIAL, policial).toPromise();
  }

}
