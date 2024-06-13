import { Obra } from '../src/obra';

describe('Obra Read', () => {
    test('Deve exibir detalhes da obra corretamente', () => {
        console.log = jest.fn();
        const obra = new Obra(1, 'Construção A', 'Rua A, 123', '2023-01-01', '2023-12-31', 'Descrição da obra A');
        obra.mostrarDetalhes();
        expect(console.log).toHaveBeenCalledWith(
            '1 - Construção A foi iniciada no endereço Rua A, 123 em \n            2023-01-01 e está prevista para terminar em 2023-12-31. Descrição: Descrição da obra A'
        );
    });
});
