function calcularEsfera() {
    const raio = parseFloat(document.getElementById("raio").value);

    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido para o raio.");
        return;
    }

    const comprimento = 2 * Math.PI * raio;
    const area = Math.PI * Math.pow(raio, 2);
    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

    document.getElementById("resultado").innerHTML = 
        "Comprimento da esfera: " + comprimento.toFixed(2) + " unidades<br>" +
        "Área da esfera: " + area.toFixed(2) + " unidades²<br>" +
        "Volume da esfera: " + volume.toFixed(2) + " unidades³";
}