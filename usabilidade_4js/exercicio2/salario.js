function calcularNovoSalario() {
    const salario = parseFloat(document.getElementById("salario").value);

    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira valores válidos de salário.");
        return;
    }

    const aumento = salario * 0.25;
    const novoSalario = salario + aumento;

    document.getElementById("resultado").innerHTML = 
    "O novo salário com aumento de 25% é: R$ " + novoSalario.toFixed(2);
}