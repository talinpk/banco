class ClienteController{

    private _inputNome: HTMLInputElement;
    private _inputCpf: HTMLInputElement;
    private _selecionarConta: HTMLSelectElement;
    private _clientes: Clientes;
    private _contas: Contas;

    constructor(){
        this._inputNome = <HTMLInputElement>document.querySelector("#nome");
        this._inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this._selecionarConta = <HTMLSelectElement>document.querySelector("#tipoConta");
        this._clientes = new Clientes();
        this._contas = new Contas();
    }

    inserir(evento: Event){
        evento.preventDefault();
        const numero: string = Math.floor(Math.random() * 1000).toString();
        let tipoDeConta: string = this._selecionarConta.options[this._selecionarConta.selectedIndex].value;
        let cliente: Cliente;
        let conta: Conta;

        switch(tipoDeConta) {
            case "poupança":
                conta = new Poupanca(numero, 0);
                cliente = new Cliente(this._inputNome.value, this._inputCpf.value, <Poupanca>conta);
                break;
            
            case "bonificada":
                conta = new ContaBonificada(numero, 0);
                cliente = new Cliente(this._inputNome.value, this._inputCpf.value, <ContaBonificada>conta);
                break;

            default:
                conta = new Conta(numero, 0);
                cliente = new Cliente(this._inputNome.value, this._inputCpf.value, conta);     
    }
    this._contas.inserir(conta);
    this._clientes.inserir(cliente);
    this._inputNome.value = "";
    this._inputCpf.value = "";
    this.inserirHTML(cliente);

}

    inserirHTML(cliente: Cliente){
        const elementoP = document.createElement('p');
        elementoP.textContent = `Nome: ${cliente.nome}, CPF: ${cliente.cpf}, Conta: ${cliente.conta}`;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this._contas.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    listar(){ 
        this._clientes.listar().forEach(
            cliente => {
                this.inserirHTML(cliente);
            }
        );
    }

}