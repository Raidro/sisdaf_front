import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OpmService{

private readonly URL_BUSCA_TODOS = `${environment.apiUrl}/opms`;
private readonly URL_SALVA_OPM = `${environment.apiUrl}/opms`;

constructor(private http: HttpClient) {}

//busca todas as opms

  buscaTodos(): Promise<any>{
    return this.http.get(this.URL_BUSCA_TODOS)
    .toPromise();

  }

  //salva Opm
  salvaOpm(opm: any): Promise <any> {
    return this.http.post(this.URL_SALVA_OPM, opm).toPromise();
  }

}


