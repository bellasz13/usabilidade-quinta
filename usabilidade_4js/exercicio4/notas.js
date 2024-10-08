function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira valores válidos para todas as notas.");
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultado").innerHTML = 
        "A média aritmética das notas é: " + media.toFixed(2);
}