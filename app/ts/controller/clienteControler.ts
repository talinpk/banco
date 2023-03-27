class ClienteController {
    private _inputNome: HTMLInputElement;
    private _inputCpf: HTMLInputElement;
    private _inputConta: HTMLInputElement;
    private _clientes: Clientes;

    constructor() {
        this._inputNome =
            document.querySelector("#nome");
        this._inputCpf =
            document.querySelector("#cpf");
        this._inputConta =
            document.querySelector("#conta");
        this._clientes = new Clientes();
    }

    inserir(evento: Event): void {
        
        evento.preventDefault();
        
        let conta: Conta | undefined = contaController.pesquisarConta(this._inputConta.value);
        
        if (conta) {
            const cliente: Cliente = new Cliente(this._inputNome.value, this._inputCpf.value, conta);
            
            this._clientes.inserir(cliente);
            this.inserirClienteNoHTML(cliente);

        } else {
            alert("Conta não encontrada!");
        }
        
    }

    listar(): void {
        this._clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente): void {
        const elementoP: HTMLParagraphElement = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar: HTMLButtonElement = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this._clientes.remover(cliente.cpf);
                (<HTMLButtonElement>event.target).parentElement.remove();
            }
        );

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}