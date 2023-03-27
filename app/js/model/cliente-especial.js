class Clientes {
    constructor() {
        this._clientes = [];
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const index = this._clientes.findIndex(cliente => cliente.cpf == cpf);
        if (index != -1) {
            this._clientes.splice(index, 1);
            return true;
        }
        return undefined;
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.filter(cliente => cliente.cpf == cpf)[0];
    }
}
