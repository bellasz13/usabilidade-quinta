function converterParaFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsius)) {
        alert("Por favor, insira um valor de temperatura válido.");
        return;
    }

    const fahrenheit = (celsius * 1.8) + 32;

    document.getElementById("resultado").innerHTML = 
        "A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2) + " °F";
}