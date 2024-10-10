function resolverEquacaoSegundoGrau(a, b, c) {
    // a = 0, b = 0 e c = 0
    if (a === 0 && b === 0 && c === 0) {
        return "Igualdade confirmada: 0 = 0";
    }

    //a = 0 e b = 0, c diferente de 0
    if (a === 0 && b === 0 && c !== 0) {
        return "Coeficientes informados incorretamente";
    }

    // a = 0, b diferente de 0
    if (a === 0 && b !== 0) {
        const x = -c / b;
        return `Esta é uma equação de primeiro grau: x = ${x}`;
    }

    // diferente de 0 (equação de segundo grau)
    if (a !== 0) {
        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            return `Esta é uma equação de segundo grau. Esta equação não possui raízes reais (delta < 0): delta = ${delta}`;
        } else if (delta === 0) {
            const x = -b / (2 * a);
            return `Esta é uma equação de segundo grau. Esta equação possui duas raízes reais iguais: x' = x'' = ${x}`;
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return `Esta é uma equação de segundo grau. Esta equação possui duas raízes reais diferentes: delta = ${delta}, x' = ${x1.toFixed(2)}, x'' = ${x2.toFixed(2)}`;
        }
    }
}

function calcularEquacao() {
    const a = parseFloat(document.getElementById('coeficienteA').value);
    const b = parseFloat(document.getElementById('coeficienteB').value);
    const c = parseFloat(document.getElementById('coeficienteC').value);

    const resultado = resolverEquacaoSegundoGrau(a, b, c);
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = resultado;
    resultadoDiv.style.display = 'block';
}