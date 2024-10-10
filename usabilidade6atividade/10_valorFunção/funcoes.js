function calcularFuncao() {
    const x = parseFloat(document.getElementById('valorX').value);
    let resultado;

    if (x < -2) {
        resultado = 2 * x + 2;
    } else if (x >= -2 && x < 3) {
        resultado = 3;
    } else if (x >= 3) {
        resultado = -x;
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `f(${x}) = ${resultado}`;
    resultadoDiv.style.display = 'block';
}
