function calcularHipotenusa() {
    const catetoA = parseFloat(document.getElementById("catetoA").value);
    const catetoB = parseFloat(document.getElementById("catetoB").value);

    if (isNaN(catetoA) || isNaN(catetoB) || catetoA <= 0 || catetoB <= 0) {
        alert("Por favor, insira valores válidos para os catetos.");
        return;
    }

    const hipotenusa = Math.sqrt((catetoA * catetoA) + (catetoB * catetoB));

    document.getElementById("resultado").innerHTML = 
        "A hipotenusa do triângulo é: " + hipotenusa.toFixed(2);
}