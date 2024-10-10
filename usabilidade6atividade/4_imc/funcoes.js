document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        const imcResultado = imc.toFixed(2);
        let situacao = '';

        if (imc < 20) {
            situacao = 'Abaixo do peso';
        } else if (imc >= 20 && imc < 25) {
            situacao = 'Normal';
        } else if (imc >= 25 && imc < 30) {
            situacao = 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            situacao = 'Obesidade grau I';
        } else if (imc >= 35 && imc < 40) {
            situacao = 'Obesidade grau II';
        } else {
            situacao = 'Obesidade grau III';
        }

        document.getElementById('imcResultado').innerText = `Seu IMC é: ${imcResultado}`;
        document.getElementById('imcSituacao').innerText = `Situação: ${situacao}`;
    } else {
        alert('Por favor, insira valores válidos para peso e altura.');
    }
});
