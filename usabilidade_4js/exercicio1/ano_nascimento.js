function calcularIdades() {
    const anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    const anoAtual = parseInt(document.getElementById("anoAtual").value);


    if (isNaN(anoNascimento) || isNaN(anoAtual)) {
        alert("Por favor, insira valores válidos para os anos.");
        return;
    }

    const idadeAtual = anoAtual - anoNascimento;

    const idadeEm2050 = 2050 - anoNascimento;

    document.getElementById("resultado").innerHTML = 
        "A idade da pessoa no ano atual (" + anoAtual + ") é: " + idadeAtual + " anos.<br>" +
        "A idade da pessoa em 2050 será: " + idadeEm2050 + " anos.";
}