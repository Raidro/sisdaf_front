import { OpmService } from './opm.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';




class Opm{
  id: number;
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

opm = new Opm();
opms = [];

constructor(private service: OpmService){}

ngOnInit(): void {
  this.buscaOpm();

}

buscaOpm(){
  this.service.buscaTodos().then(dados =>{

    this.opms = dados

  });
}

salvar(formOpm: NgForm){

  this.opm.nome = formOpm.value.nome;
  this.opm.sigla = formOpm.value.sigla;

  this.service.salvaOpm(this.opm).then(o => {

    this.buscaOpm();
  });

  this.opm = new Opm();

}


}
