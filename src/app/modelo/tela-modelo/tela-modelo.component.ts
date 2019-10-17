import { ModeloService } from './modelo.service';
import { OnInit, Component } from '@angular/core';
import { NgForm } from '@angular/forms';



class Modelo {
  id: number;
  tipo: string;
  calibre: string;
  nome: string;
  fabricante: string;
}

@Component({
  selector: 'app-modelo',
  templateUrl: './tela-modelo.component.html',
  styleUrls: ['./tela-modelo.component.css']
})
export class ModeloComponent implements OnInit {

  modelo = new Modelo();
  modelos = [];

  constructor(private service: ModeloService) { }

  ngOnInit(): void {
    this.buscaModelo();

  }

  buscaModelo() {
    this.service.buscaTodos().then(dados => {

      this.modelos = dados
      console.log(this.modelos);
    });
  }

  salvar(formModelo: NgForm) {
    this.modelo.tipo = formModelo.value.tipo;
    this.modelo.calibre = formModelo.value.calibre;
    this.modelo.nome = formModelo.value.nome;
    this.modelo.fabricante = formModelo.value.fabricante;

    this.service.salvaModelo(this.modelo).then(o => {

      this.buscaModelo();
    });

    this.modelo = new Modelo();

  }


}
