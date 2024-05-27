const { adicionarObra, removerObra, existeObra, listarObras,atualizarObra, obras } = require('../src/obras');

beforeEach(() => {
    obras.length = 0;  
});

test('deve atualizar os detalhes de uma obra corretamente', () => {
    adicionarObra( 'Construção de Biblioteca','Rua E, Bairro F', new Date(2024, 2, 1), new Date(2024, 8, 30), 'Construção de uma nova biblioteca');
    
    const novosDados = { descricao: 'Construção de uma biblioteca pública', dataFim: new Date(2024, 9, 30) };
    atualizarObra('Construção de Biblioteca', 'Rua E, Bairro F', novosDados);
    
    const obraAtualizada = listarObras().find(obra => obra.titulo === 'Construção de Biblioteca' && obra.endereco === 'Rua E, Bairro F');
    expect(obraAtualizada.descricao).toBe('Construção de uma biblioteca pública');
    expect(obraAtualizada.dataFim).toEqual(new Date(2024, 9, 30));
});