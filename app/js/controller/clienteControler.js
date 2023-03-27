class ClienteControler {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCPF =
            document.querySelector("#cpf");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Cliente(this.inputNome.value, this.inputCPF.value, c1);
        this.clientes.inserir(novaConta);
        this.inserirClienteNoHTML(novaConta);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
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
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}