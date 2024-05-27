const { adicionarObra, obras } = require('../src/obras');

beforeEach(() => {
    obras.length = 0;
});

test('não deve permitir adicionar uma obra já existente', () => {
    adicionarObra('Construção de Escola', 'Rua A, Bairro B', new Date(2024, 0, 1), new Date(2024, 11, 31), 'Construção de uma escola pública');

    expect(() => {
        adicionarObra('Construção de Escola', 'Rua A, Bairro B', new Date(2024, 0, 1), new Date(2024, 11, 31), 'Construção de uma escola pública');
    }).toThrow('Obra já existente no sistema');
});

test('deve permitir adicionar uma obra não existente', () => {
    const novaObra = adicionarObra('Construção de Hospital', 'Avenida Z, Bairro Y', new Date(2024, 6, 1), new Date(2024, 11, 31), 'Construção de um hospital');

    expect(obras).toContainEqual(novaObra);
});
test('não deve permitir adicionar obra com título vazio', () => {
    expect(() => {
        adicionarObra('', 'Rua L, Bairro M', new Date(2024, 0, 1), new Date(2024, 11, 31), 'Construção de uma praça pública');
    }).toThrow('Título da obra não pode ser vazio');
});

test('não deve permitir adicionar obra com endereço vazio', () => {
    expect(() => {
        adicionarObra('Construção de Escola', '', new Date(2024, 0, 1), new Date(2024, 11, 31), 'Construção de uma escola pública');
    }).toThrow('Endereço da obra não pode ser vazio');
});

test('não deve permitir adicionar obra com descrição vazia', () => {
    expect(() => {
        adicionarObra('Construção de Escola', 'Rua V, Bairro W', new Date(2024, 0, 1), new Date(2024, 11, 31), '');
    }).toThrow('Descrição da obra não pode ser vazia');
});
