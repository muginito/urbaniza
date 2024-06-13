import { Obra, GerenciaObra } from '../src/gerenciaobra';

describe('GerenciaObra Read', () => {
    let gerencia;

    beforeEach(() => {
        gerencia = new GerenciaObra();
    });

    test('Deve listar todas as obras corretamente', () => {
        gerencia.criaObra(1, 'Construção A', 'Rua A, 123', '2023-01-01', '2023-12-31', 'Descrição da obra A');
        gerencia.criaObra(2, 'Construção B', 'Rua B, 456', '2023-02-01', '2023-11-30', 'Descrição da obra B');
        const obras = gerencia.listaObras();
        expect(obras.length).toBe(2);
    });
});
