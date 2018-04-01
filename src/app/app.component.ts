import { Component } from '@angular/core';
import {Evento} from './evento.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sigla = null;
  nome = null;
  prazo = null;
  url = null;
  dataInicio = null;
  dataFim = null;
  editando = null;
  selecionado = null;

  eventos = [new Evento("SSP", "Sopão Só Pé", '2018/03/20', 'http://www.ssp.com.br/submissao', null, null),
             new Evento('MMs',"Melhor Chocolate", '2018/04/01', 'http://www.mms.com.gl', null, null)];

  constructor(){
      this.invocar_cache();
  }

    salvar() {
        if (this.editando) {
            this.editando.sigla = this.sigla;
            this.editando.nome = this.nome;
            this.editando.prazo = this.prazo;
            this.editando.url = this.url;
            this.editando.dataInicio = this.dataInicio;
            this.editando.dataFim = this.dataFim;
            this.armazenar_cache(this.editando);
        } else {
            const e = new Evento(this.sigla, this.nome, this.prazo, this.url, this.dataInicio, this.dataFim);
            this.eventos.push(e);
            this.armazenar_cache(e);
        }
        this.sigla = null;
        this.nome = null;
        this.url = null;
        this.prazo = null;
        this.dataInicio = false;
        this.dataFim = null;
        this.editando = null;
    }

    excluir(evento) {
        if (this.editando == evento) {
            alert('Você não pode excluir um evento que está editando');
        } else {
            if (confirm('Tem certeza que deseja excluir o evento "'
                    + evento.nome + '"?')) {
                const i = this.eventos.indexOf(evento);
                this.remover_cache(evento);
                this.eventos.splice(i, 1);
            }
        }
    }

    editar(evento) {
        this.sigla = evento.sigla;
        this.nome = evento.nome;
        this.prazo = evento.prazo;
        this.url = evento.url;
        this.dataInicio = evento.dataInicio;
        this.dataFim = evento.dataFim;
        this.editando = evento;
    }

    cancelar() {
        this.sigla = null;
        this.nome = null;
        this.prazo = null;
        this.url = null;
        this.dataInicio = null;
        this.dataFim = null;
        this.editando = null;
    }

    selecionar(status){
        this.selecionado = status;
    }

    armazenar_cache(evento){
        localStorage.setItem((evento.sigla).toString(), JSON.stringify(evento));
    }
    remover_cache(evento){
        localStorage.removeItem(evento.sigla);
    }
    invocar_cache(){
        for(const i in localStorage){
            const e = JSON.parse(localStorage.getItem(i));
            if(e != undefined){
                this.eventos.push(e);
            }
        }
    }


}

