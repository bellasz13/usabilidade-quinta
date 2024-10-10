class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }

    setNome(nome) {
        this._nome = nome;
    }

    getNome() {
        return this._nome;
    }

    toString() {
        return `Nome: ${this._nome}`;
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this._cpf = cpf;
    }

    setCPF(cpf) {
        this._cpf = cpf;
    }

    getCPF() {
        return this._cpf;
    }

    toString() {
        return `Pessoa Física - ${super.toString()}, CPF: ${this._cpf}`;
    }
}

class PessoaJuridica extends Pessoa {
    constructor(nome, cnpj) {
        super(nome);
        this._cnpj = cnpj;
    }

    setCNPJ(cnpj) {
        this._cnpj = cnpj;
    }

    getCNPJ() {
        return this._cnpj;
    }

    toString() {
        return `Pessoa Jurídica - ${super.toString()}, CNPJ: ${this._cnpj}`;
    }
}

class Cadastro {
    constructor() {
        this.pessoas = [];
    }

    cadastrarPessoaFisica(nome, cpf) {
        const pessoaFisica = new PessoaFisica(nome, cpf);
        this.pessoas.push(pessoaFisica);
    }

    cadastrarPessoaJuridica(nome, cnpj) {
        const pessoaJuridica = new PessoaJuridica(nome, cnpj);
        this.pessoas.push(pessoaJuridica);
    }

    imprimirCadastro() {
        return this.pessoas.map(pessoa => pessoa.toString()).join('<br>');
    }
}

const cadastro = new Cadastro();

function cadastrar() {
    const tipoPessoa = document.getElementById('tipoPessoa').value;
    const nome = document.getElementById('nome').value;
    let cpf, cnpj;

    if (tipoPessoa === 'fisica') {
        cpf = document.getElementById('cpf').value;
        cadastro.cadastrarPessoaFisica(nome, cpf);
    } else {
        cnpj = document.getElementById('cnpj').value;
        cadastro.cadastrarPessoaJuridica(nome, cnpj);
    }

    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('cnpj').value = '';
    
    document.getElementById('cadastroList').innerHTML = cadastro.imprimirCadastro();
}

document.getElementById('tipoPessoa').addEventListener('change', function() {
    const tipo = this.value;
    document.getElementById('cpfDiv').style.display = tipo === 'fisica' ? 'block' : 'none';
    document.getElementById('cnpjDiv').style.display = tipo === 'juridica' ? 'block' : 'none';
});