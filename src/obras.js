

class Obra {
    constructor(titulo, endereco, dataInicio, dataFim, descricao) {
        this.titulo = titulo;
        this.endereco = endereco;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.descricao = descricao;
    }
}


const obras = [];

// Função para adicionar uma obra à lista
function adicionarObra(titulo, endereco, dataInicio, dataFim, descricao) {

    if (!titulo || titulo.trim() === '') {
        throw new Error('Título da obra não pode ser vazio');
    }
    if (!endereco || endereco.trim() === '') {
        throw new Error('Endereço da obra não pode ser vazio');
    }
    if (!descricao || descricao.trim() === '') {
        throw new Error('Descrição da obra não pode ser vazia');
    }

    // Verifica se a obra já existe
    const obraExistente = obras.find(obra => obra.titulo === titulo && obra.endereco === endereco);
    if (obraExistente) {
        throw new Error('Obra já existente no sistema');
    }
    // Adiciona a nova obra
    const novaObra = new Obra(titulo, endereco, dataInicio, dataFim, descricao);
    obras.push(novaObra);
    return novaObra;
}

// Função para verificar se uma obra existe na lista
function existeObra(titulo, endereco) {
    return obras.some(obra => obra.titulo === titulo && obra.endereco === endereco);
}

// Função para remover uma obra da lista
function removerObra(titulo, endereco) {
    const index = obras.findIndex(obra => obra.titulo === titulo && obra.endereco === endereco);
    if (index !== -1) {
        obras.splice(index, 1);
    }
}
function atualizarObra(titulo, endereco, novosDados) {
    const obra = obras.find(obra => obra.titulo === titulo && obra.endereco === endereco);
    if (obra) {
        Object.assign(obra, novosDados);
    }
}
// Função para listar todas as obras
function listarObras() {
    return obras;
}

module.exports = { adicionarObra, removerObra, existeObra, listarObras, atualizarObra,obras };
