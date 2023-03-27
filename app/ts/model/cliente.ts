class Cliente {
    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(): string {
        return this._nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    get conta(): Conta {
        return this._conta;
    }

    set nome(nomeNovo: string) {
        this._nome = nomeNovo;
    }

    set cpf(cpfNovo: string) {
        this._cpf = cpfNovo;
    }

    set conta(contaNovo: Conta) {
        this._conta = contaNovo;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta.numero}`;
    }
}