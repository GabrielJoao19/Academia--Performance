import { test, expect, describe } from 'vitest';
import { CartaoDeCredito, Pix } from './Pagamento';

describe('Testes de Métodos de Pagamento', () => {
    
    test('Deve processar pagamento via Cartão de Crédito após alterar limite', () => {
        const cartao = new CartaoDeCredito("1234-5678", 1000);
        
        cartao.limiteDisponivel = 500;
        
        const resultado = cartao.processarPagamento(200);
        
        expect(resultado).toContain("Pago R$ 200");
        expect(cartao.limiteDisponivel).toBe(300);
    });

    test('Deve processar pagamento via Pix após alterar chave', () => {
        const pix = new Pix("meu-email@teste.com", "João Silva");
        
        pix.chavePix = "000.111.222-33";
        
        const resultado = pix.processarPagamento(50);
        
        expect(resultado).toContain("000.111.222-33");
        expect(resultado).toContain("João Silva");
    });
});