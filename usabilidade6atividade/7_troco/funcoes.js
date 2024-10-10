document.getElementById('trocoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const valorPago = parseFloat(document.getElementById('valorPago').value);

    if (valorPago < valorCompra) {
        document.getElementById('mensagemTroco').innerText = 'A quantia paga é insuficiente para realizar a compra!';
        document.getElementById('detalheTroco').innerText = '';
        return;
    }

    let troco = valorPago - valorCompra;
    document.getElementById('mensagemTroco').innerText = `Troco: R$ ${troco.toFixed(2)}`;

    const notas = [50, 20, 10, 5, 2, 1];
    const quantidadeNotas = {};
    let detalheTroco = '';

    notas.forEach(nota => {
        const qtdNota = Math.floor(troco / nota);
        quantidadeNotas[nota] = qtdNota;
        troco = troco % nota;
    });

    Object.keys(quantidadeNotas).forEach(nota => {
        detalheTroco += `Notas de R$ ${nota}: ${quantidadeNotas[nota]}<br>`;
    });

    document.getElementById('detalheTroco').innerHTML = detalheTroco;
});