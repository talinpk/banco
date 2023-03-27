class ClienteController {
    constructor() {
        this._inputNome =
            document.querySelector("#nome");
        this._inputCpf =
            document.querySelector("#cpf");
        this._inputConta =
            document.querySelector("#conta");
        this._clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let conta = contaController.pesquisarConta(this._inputConta.value);
        if (conta) {
            const cliente = new Cliente(this._inputNome.value, this._inputCpf.value, conta);
            this._clientes.inserir(cliente);
            this.inserirClienteNoHTML(cliente);
        }
        else {
            alert("Conta não encontrada!");
        }
    }
    listar() {
        this._clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this._clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
