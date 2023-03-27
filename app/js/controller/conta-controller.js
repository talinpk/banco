class ContaController {
    constructor() {
        this.inputNumero =
            document.querySelector("#conta");
        this.inputSaldo =
            document.querySelector("#saldo");
        this._contas = new Contas();
    }
    get contas() {
        return this._contas;
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        this._contas.inserir(novaConta);
        this.inserirContaNoHTML(novaConta);
    }
    listar() {
        this._contas.listar().forEach(conta => {
            this.inserirContaNoHTML(conta);
        });
    }
    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = conta.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + conta.toString());
            this.contas.remover(conta.numero);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
    pesquisarConta(numero) {
        return this._contas.pesquisar(numero);
    }
    verContas() {
        let s = "Contas Disponiveis: ";
        for (const conta of this._contas.listar()) {
            s = s + conta.numero + ", ";
        }
        alert(s);
    }
}
