import { PolicialService } from './policial.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {OpmService} from '../../opm/telaOpm/opm.service';


class Policial {
  id: number;
  nome: string;
  matricula: string;
  cpf: string;
  cargo: string;
  Opm: string;
}


@Component({
  selector: 'app-policial',
  templateUrl: './policial.component.html',
  styleUrls: ['./policial.component.css']
})
export class PolicialComponent implements OnInit {

  policial = new Policial();
  policiais = [];
  opms = [];


  constructor(private service: PolicialService, private opmService: OpmService) { }

  ngOnInit() {
    this.buscaPolicial();
    this.buscaOpm();
  }

  buscaPolicial() {
    this.service.buscaTodos().then(dados => {

      this.policiais = dados
      console.log(this.policiais);
    });
  }

  buscaOpm() {
    this.opmService.buscaTodos().then(dados => {

      this.opms = dados
      console.log(this.opms);
    });
  }

  salvar(formPolicial: NgForm) {

    this.policial.nome = formPolicial.value.nome;
    this.policial.matricula = formPolicial.value.matricula;
    this.policial.cpf = formPolicial.value.cpf;
    this.policial.cargo = formPolicial.value.cargo;
    this.policial.Opm = formPolicial.value.opm;

    this.service.salvaPolicial(this.policial).then(o => {

      this.buscaPolicial();
    });

    this.policial = new Policial();

  }


}
