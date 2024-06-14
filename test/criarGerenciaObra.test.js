import { Obra } from '../src/obra';
import { GerenciaObra } from '../src/gerenciaObra';

describe('GerenciaObra Creation', () => {
    let gerencia;

    beforeEach(() => {
        gerencia = new GerenciaObra();
    });

    test('Deve criar uma nova obra corretamente', () => {
        gerencia.criaObra(1, 'Construção A', 'Rua A, 123', '2023-01-01', '2023-12-31', 'Descrição da obra A');
        expect(gerencia.listaObras().length).toBe(1);
        expect(gerencia.listaObras()[0]).toEqual(
            new Obra(1, 'Construção A', 'Rua A, 123', '2023-01-01', '2023-12-31', 'Descrição da obra A')
        );
    });
});
