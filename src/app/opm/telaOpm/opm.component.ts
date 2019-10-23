import { OpmService } from './opm.service';
import { OnInit, Component } from '@angular/core';
import { NgForm } from '@angular/forms';



class Opm {
  id: number;
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-opm',
  templateUrl: './opm.component.html',
  styleUrls: ['./opm.component.css']
})

export class OpmComponent implements OnInit {

  opm = new Opm();
  opms = [];

  constructor(private service: OpmService) { }

  ngOnInit(): void {
    this.buscaOpm();

  }

  buscaOpm() {
    this.service.buscaTodos().then(dados => {

      this.opms = dados
      console.log(this.opms);
    });
  }

  salvar(formOpm: NgForm) {

    this.opm.nome = formOpm.value.nome;
    this.opm.sigla = formOpm.value.sigla;

    this.service.salvaOpm(this.opm).then(o => {

      this.buscaOpm();
    });

    this.opm = new Opm();

  }


}
