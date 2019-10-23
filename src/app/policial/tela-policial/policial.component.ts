import { OpmService } from './../../opm/telaOpm/opm.service';
import { PolicialService } from './policial.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OpmComponent } from 'src/app/opm/telaOpm/opm.component';


class Policial {
  id: number;
  nome: string;
  matricula: string;
  cpf: string;
  cargo: string;
  Opm: OpmComponent;
}


@Component({
  selector: 'app-policial',
  templateUrl: './policial.component.html',
  styleUrls: ['./policial.component.css']
})
export class PolicialComponent implements OnInit {

  policial = new Policial();
  policiais = [];

  constructor(private service: PolicialService) { }

  ngOnInit() {
    this.buscaPolicial();
  }

  buscaPolicial() {
    this.service.buscaTodos().then(dados => {

      this.policiais = dados
      console.log(this.policiais);
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
