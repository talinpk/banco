class ContaController {

    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;

    private _contas: Contas;

    constructor() {
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#conta")
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this._contas = new Contas();
    }

    get contas(): Contas {
        return this._contas;
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value,
            parseFloat(this.inputSaldo.value));

        this._contas.inserir(novaConta);
        this.inserirContaNoHTML(novaConta);
    }

    listar() {
        this._contas.listar().forEach(
            conta => {
                this.inserirContaNoHTML(conta);
            }
        );
    }

    inserirContaNoHTML(conta: Conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = conta.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + conta.toString());
                this.contas.remover(conta.numero);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    pesquisarConta(numero: string): Conta {
        return this._contas.pesquisar(numero);
    }

    verContas(): void {
        let s: string = "Contas Disponiveis: ";
        for(const conta of this._contas.listar()) {
            s = s + conta.numero + ", ";
        }
        alert(s);
    }

}