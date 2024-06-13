export class Obra {
    constructor(id, titulo, endereco, dataInicio, dataFim, descricao) {
        this.id = id;
        this.titulo = titulo;
        this.endereco = endereco;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.descricao = descricao;
    }

    mostrarDetalhes() {
        console.log(`${this.id} - ${this.titulo} foi iniciada no endereço ${this.endereco} em 
            ${this.dataInicio} e está prevista para terminar em ${this.dataFim}. Descrição: ${this.descricao}`);
    }
}

