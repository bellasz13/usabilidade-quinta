document.getElementById('folhaPagamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigoColaborador = parseInt(document.getElementById('codigoColaborador').value);
    const horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);

    let nomeColaborador = '';
    let valorHora = 0;

    switch (codigoColaborador) {
        case 1:
            nomeColaborador = 'Ana';
            valorHora = 45.78;
            break;
        case 2:
            nomeColaborador = 'Bruna';
            valorHora = 60.00;
            break;
        case 3:
            nomeColaborador = 'Carlos';
            valorHora = 38.99;
            break;
        case 4:
            nomeColaborador = 'Diogo';
            valorHora = 45.78;
            break;
        case 5:
            nomeColaborador = 'Ester';
            valorHora = 45.78;
            break;
        default:
            nomeColaborador = 'Código inválido!';
            valorHora = 0;
            break;
    }

    if (valorHora > 0 && horasTrabalhadas > 0) {
        const valorBruto = (valorHora * horasTrabalhadas).toFixed(2);
        document.getElementById('nomeColaborador').innerText = `Colaborador(a): ${nomeColaborador}`;
        document.getElementById('valorBruto').innerText = `Valor bruto a ser pago: R$ ${valorBruto}`;
    } else {
        alert('Por favor, insira um código de colaborador válido e horas trabalhadas.');
    }
});
