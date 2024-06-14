import { Obra } from '../src/obra';

describe('Obra Creation', () => {
    test('Deve criar uma instância de Obra corretamente', () => {
        const obra = new Obra(1, 'Construção A', 'Rua A, 123', '2023-01-01', '2023-12-31', 'Descrição da obra A');
        expect(obra.id).toBe(1);
        expect(obra.titulo).toBe('Construção A');
        expect(obra.endereco).toBe('Rua A, 123');
        expect(obra.dataInicio).toBe('2023-01-01');
        expect(obra.dataFim).toBe('2023-12-31');
        expect(obra.descricao).toBe('Descrição da obra A');
    });
});
