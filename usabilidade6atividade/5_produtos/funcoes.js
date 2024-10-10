document.getElementById('produtoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigoProduto = parseInt(document.getElementById('codigoProduto').value);
    let nomeProduto = '';
    let precoProduto = '';

    switch (codigoProduto) {
        case 1:
            nomeProduto = 'Sapato';
            precoProduto = 'R$ 99,99';
            break;
        case 2:
            nomeProduto = 'Bolsa';
            precoProduto = 'R$ 103,89';
            break;
        case 3:
            nomeProduto = 'Camisa';
            precoProduto = 'R$ 49,98';
            break;
        case 4:
            nomeProduto = 'Calça';
            precoProduto = 'R$ 89,72';
            break;
        case 5:
            nomeProduto = 'Blusa';
            precoProduto = 'R$ 97,35';
            break;
        default:
            nomeProduto = 'Código inválido!';
            precoProduto = '';
            break;
    }

    document.getElementById('nomeProduto').innerText = nomeProduto;
    document.getElementById('precoProduto').innerText = precoProduto;
});

