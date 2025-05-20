function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "Maioridade";
    } else if (idade >= 0 && idade < 18) {
        return "Menoridade";
    } else {
        return "Valor inválido. Tente outra vez.";
    }
}

function mostrarResultado() {
    const idade = document.getElementById("idadeInput").value;
    const resultadoDiv = document.getElementById("resultadoTexto");

    const resposta = verificarMaioridade(parseFloat(idade));

    if (resposta === "Maioridade") {
        resultadoDiv.innerHTML = `<span class="maior">✅ ${resposta}</span>`;
    } else if (resposta === "Menoridade") {
        resultadoDiv.innerHTML = `<span class="menor">👶 ${resposta}</span>`;
    } else {
        resultadoDiv.innerHTML = `<span class="erro">⚠️ ${resposta}</span>`;
    }
}