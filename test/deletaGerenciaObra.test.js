import { GerenciaObra } from '../src/gerenciaObra';

describe('GerenciaObra Delete', () => {
    let gerencia;

    beforeEach(() => {
        gerencia = new GerenciaObra();
    });

    test('Deve deletar uma obra corretamente', () => {
        gerencia.criaObra(1, 'Construção A', 'Rua A, 123', '2023-01-01', '2023-12-31', 'Descrição da obra A');
        gerencia.deletaObra(1);
        expect(gerencia.listaObras().length).toBe(0);
    });

    test('Deve retornar mensagem ao tentar deletar obra inexistente', () => {
        console.log = jest.fn();
        gerencia.deletaObra(999);
        expect(console.log).toHaveBeenCalledWith('Obra com ID 999 não encontrada.');
    });

    test('Deve manter a lista inalterada ao tentar deletar obra inexistente', () => {
        gerencia.criaObra(1, 'Construção A', 'Rua A, 123', '2023-01-01', '2023-12-31', 'Descrição da obra A');
        gerencia.deletaObra(999);
        const obras = gerencia.listaObras();
        expect(obras.length).toBe(1);
    });
});
