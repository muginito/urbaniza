import { GerenciaObra } from '../src/gerenciaObra';

describe('GerenciaObra Update', () => {
    let gerencia;

    beforeEach(() => {
        gerencia = new GerenciaObra();
    });

    test('Deve atualizar uma obra corretamente', () => {
        gerencia.criaObra(1, 'Construção A', 'Rua A, 123', '2023-01-01', '2023-12-31', 'Descrição da obra A');
        gerencia.atualizaObra(1, 'Construção A - Atualizada', 'Nova Rua, 456', '2023-01-15', '2024-01-31', 'Descrição atualizada');
        const obra = gerencia.listaObras()[0];
        expect(obra.titulo).toBe('Construção A - Atualizada');
        expect(obra.endereco).toBe('Nova Rua, 456');
        expect(obra.dataInicio).toBe('2023-01-15');
        expect(obra.dataFim).toBe('2024-01-31');
        expect(obra.descricao).toBe('Descrição atualizada');
    });

    test('Deve retornar mensagem ao tentar atualizar obra inexistente', () => {
        console.log = jest.fn();
        gerencia.atualizaObra(999, 'Construção Inexistente', 'Endereço inexistente', '2023-01-01', '2023-12-31', 'Descrição inexistente');
        expect(console.log).toHaveBeenCalledWith('Obra com ID 999 não encontrada.');
    });
});
