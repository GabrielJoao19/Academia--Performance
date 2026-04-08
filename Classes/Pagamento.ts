interface MetodoPagamento {
    processarPagamento(valor: number): string;
}

export class CartaoDeCredito implements MetodoPagamento {
    constructor(
        public numeroCartao: string,
        public limiteDisponivel: number
    ) {}

    processarPagamento(valor: number): string {
        if (valor <= this.limiteDisponivel) {
            this.limiteDisponivel -= valor;
            return `Pago R$ ${valor} com o cartão ${this.numeroCartao}. Limite restante: R$ ${this.limiteDisponivel}`;
        }
        return "Saldo insuficiente no cartão.";
    }
}

export class Pix implements MetodoPagamento {
    constructor(
        public chavePix: string,
        public nomeFavorecido: string
    ) {}

    processarPagamento(valor: number): string {
        return `Transferindo R$ ${valor} via Pix para ${this.nomeFavorecido} (Chave: ${this.chavePix})`;
    }
}