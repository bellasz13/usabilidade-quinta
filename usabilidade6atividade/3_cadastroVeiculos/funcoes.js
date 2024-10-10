class Veiculo {
    #chassi;
    #placa;

    constructor(chassi, placa) {
        this.#chassi = chassi;
        this.#placa = placa;
    }

    getChassi() {
        return this.#chassi;
    }

    getPlaca() {
        return this.#placa;
    }
}

let veiculos = [];

function cadastrarVeiculo() {
    
    const chassi = document.getElementById('chassi').value;
    const placa = document.getElementById('placa').value;

    if (chassi === '' || placa === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const novoVeiculo = new Veiculo(chassi, placa);

    veiculos.push(novoVeiculo);

    document.getElementById('formCadastro').reset();

    alert('Veículo cadastrado com sucesso!');
}

function exibirVeiculos() {
    const listaVeiculos = document.getElementById('listaVeiculos');
    listaVeiculos.innerHTML = '';

    if (veiculos.length === 0) {
        listaVeiculos.innerHTML = '<p>Nenhum veículo cadastrado.</p>';
        return;
    }

    let html = '<h3>Veículos Cadastrados:</h3>';
    html += '<ul>';

    veiculos.forEach((veiculo, index) => {
        html += `<li>Veículo ${index + 1}: Chassi - ${veiculo.getChassi()}, Placa - ${veiculo.getPlaca()}</li>`;
    });

    html += '</ul>';
    listaVeiculos.innerHTML = html;
}
