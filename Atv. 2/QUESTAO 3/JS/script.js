function calcularSalarioLiquido(salarioBruto, desconto) {
    const valorDesconto = salarioBruto * (desconto / 100);
    const salarioLiquido = salarioBruto - valorDesconto;
    return {
        salarioBruto,
        desconto,
        valorDesconto,
        salarioLiquido
    };
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcular() {
    const salarioInput = document.getElementById("salarioInput").value;
    const descontoInput = document.getElementById("descontoInput").value;

    const salarioBruto = parseFloat(salarioInput);
    const desconto = parseFloat(descontoInput);

    const resultadoDiv = document.getElementById("resultadoTexto");

    if (isNaN(salarioBruto) || isNaN(desconto) || salarioBruto < 0 || desconto < 0 || desconto > 100) {
        resultadoDiv.innerHTML = `<span style="color: #c62828;">⚠️ Valores inválidos. Por favor, insira valores válidos.</span>`;
        return;
    }

    const resultado = calcularSalarioLiquido(salarioBruto, desconto);

    resultadoDiv.innerHTML = `
        <p><span class="titulo">Salário Bruto:</span> <span class="valor">${formatarMoeda(resultado.salarioBruto)}</span></p>
        <p><span class="titulo">Desconto de ${resultado.desconto}%:</span> <span class="valor">${formatarMoeda(resultado.valorDesconto)}</span></p>
        <p><span class="titulo">Salário Líquido:</span> <span class="valor">${formatarMoeda(resultado.salarioLiquido)}</span></p>
    `;
}