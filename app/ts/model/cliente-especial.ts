class Clientes {

    private _clientes: Cliente[];

    constructor() {
        this._clientes = [];

    }

    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    remover(cpf: string): boolean | undefined {
        const index: number = this._clientes.findIndex(
            cliente => cliente.cpf == cpf
        );

        if (index != -1) {
            this._clientes.splice(index, 1);

            return true;
        }
        
        return undefined;
    }

    listar(): Cliente[] {
        return this._clientes;
    }

    pesquisar(cpf: string): Cliente {
        return this._clientes.filter(
            cliente => cliente.cpf == cpf
        )[0];
    }
}