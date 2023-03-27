class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    get cpf() {
        return this._cpf;
    }
    get conta() {
        return this._conta;
    }
    set nome(nomeNovo) {
        this._nome = nomeNovo;
    }
    set cpf(cpfNovo) {
        this._cpf = cpfNovo;
    }
    set conta(contaNovo) {
        this._conta = contaNovo;
    }
    toString() {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta.numero}`;
    }
}
