function filtrarPalavras(palavras, comprimento) {
    if (!Array.isArray(palavras) || typeof comprimento !== "number" || isNaN(comprimento)) {
        return "Erro: Valores inválidos!";
    }

    const resultado = palavras.filter(palavra =>
        typeof palavra === "string" && palavra.trim().length === comprimento
    );

    return resultado;
}

function filtrar() {
    const inputPalavras = document.getElementById('palavrasInput').value.trim();
    const inputComprimento = parseInt(document.getElementById('comprimentoInput').value.trim(), 10);

    let arrayPalavras;

    try {
        // Tentando como JSON primeiro
        arrayPalavras = JSON.parse(`[${inputPalavras}]`);
    } catch (e) {
        // Se falhar, dividir por vírgulas e limpar
        arrayPalavras = inputPalavras.split(',').map(p => p.trim());
    }

    const resultado = filtrarPalavras(arrayPalavras, inputComprimento);
    const divResultado = document.getElementById('resultado');
    divResultado.style.display = 'block';

    if (Array.isArray(resultado)) {
        divResultado.innerHTML = `Palavras com ${inputComprimento} letras: <strong>[${resultado.map(p => `"${p}"`).join(', ')}]</strong>`;
    } else {
        divResultado.innerHTML = `<strong>${resultado}</strong>`;
    }
}