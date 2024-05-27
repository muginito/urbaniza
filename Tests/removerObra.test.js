const { adicionarObra, removerObra, existeObra, listarObras, obras } = require('../src/obras');

beforeEach(() => {
    obras.length = 0; // Limpa a lista de obras antes de cada teste
});

test('deve remover uma obra da lista corretamente', () => {
    // Adiciona uma obra
    const obra = adicionarObra('Construção de Teatro', 'Rua F, Bairro G', new Date(2024, 3, 1), new Date(2024, 10, 31), 'Construção de um teatro público');
    
    // Verifica se a obra foi adicionada corretamente
    expect(existeObra('Construção de Teatro', 'Rua F, Bairro G')).toBe(true);
    
    // Remove a obra da lista
    removerObra('Construção de Teatro', 'Rua F, Bairro G');
    
    // Verifica se a obra foi removida corretamente
    expect(existeObra('Construção de Teatro', 'Rua F, Bairro G')).toBe(false);
    expect(listarObras()).not.toContainEqual(obra);
});