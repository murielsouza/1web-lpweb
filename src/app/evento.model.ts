export class Evento{

    sigla: string;
    nome: string;
    prazo: string;
    url: string;
    dataInicio: Date;
    dataFim: Date;

    constructor(sigla: string, nome: string, prazo: string, url: string, dataInicio?: Date, dataFim?: Date) {
        this.sigla = sigla;
        this.nome = nome;
        this.prazo = prazo;
        this.url = url;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
}