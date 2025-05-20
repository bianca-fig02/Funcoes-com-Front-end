function calcularDesconto(preçoOriginal, desconto) {
    if (isNaN(preçoOriginal) || isNaN(desconto)) {
        return "Erro: Valores inválidos!";
    }

    preçoOriginal = parseFloat(preçoOriginal);
    desconto = parseFloat(desconto);

    if (preçoOriginal < 0 || desconto < 0 || desconto > 100) {
        return "Erro: O desconto deve estar entre 0% e 100%, e os valores não podem ser negativos.";
    }

    const preçoFinal = preçoOriginal - (preçoOriginal * (desconto / 100));
    return `O preço original é R$${preçoOriginal.toFixed(2)}. Com ${desconto}% de desconto, o novo valor é R$${preçoFinal.toFixed(2)}.`;
}

function aplicarDesconto() {
    const precoInput = document.getElementById('preco').value;
    const descontoInput = document.getElementById('desconto').value;

    const resultado = calcularDesconto(precoInput, descontoInput);
    const resultadoDiv = document.getElementById('resultado');

    if (resultado.includes("Erro")) {
        resultadoDiv.innerHTML = `<span class="erro">${resultado}</span>`;
    } else {
        resultadoDiv.textContent = resultado;
    }
}