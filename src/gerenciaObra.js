import { Obra } from './obra';

export class GerenciaObra {
    constructor() {
        this.obras = [];
    }

    listaObras() {
        return this.obras;
    }

    criaObra(id, titulo, endereco, dataInicio, dataFim, descricao) {
        const novaObra = new Obra(id, titulo, endereco, dataInicio, dataFim, descricao);
        this.obras.push(novaObra);
    }

    atualizaObra(id, titulo, endereco, dataInicio, dataFim, descricao) {
        const obra = this.obras.find(obra => obra.id === id);
        if (obra) {
            obra.titulo = titulo;
            obra.endereco = endereco;
            obra.dataInicio = dataInicio;
            obra.dataFim = dataFim;
            obra.descricao = descricao;
        } else {
            console.log(`Obra com ID ${id} não encontrada.`);
        }
    }

    deletaObra(id) {
        const index = this.obras.findIndex(obra => obra.id === id);
        if (index !== -1) {
            this.obras.splice(index, 1);
        } else {
            console.log(`Obra com ID ${id} não encontrada.`);
        }
    }
}
