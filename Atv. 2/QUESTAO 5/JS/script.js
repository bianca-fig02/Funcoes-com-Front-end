function Temperatura(valor, tipo) {
    if (typeof valor !== 'number' || (tipo !== 'CTOF' && tipo !== 'FOTC')) {
        return 'Entrada inválida';
    }
    return tipo === 'CTOF'
        ? (valor * 9 / 5) + 32
        : (valor - 32) * 5 / 9;
}

function converter() {
    const valor = parseFloat(document.getElementById("valorInput").value);
    const tipo = document.getElementById("tipoSelect").value;
    const resultadoDiv = document.getElementById("resultadoTexto");

    const resultado = Temperatura(valor, tipo);

    if (typeof resultado === "number") {
        const de = tipo === "CTOF" ? "°C" : "°F";
        const para = tipo === "CTOF" ? "°F" : "°C";
        resultadoDiv.innerHTML = `➡️ <strong>${valor.toFixed(2)}${de}</strong> = <strong>${resultado.toFixed(2)}${para}</strong>`;
    } else {
        resultadoDiv.innerHTML = `<span class="erro">⚠️ ${resultado}</span>`;
    }
}