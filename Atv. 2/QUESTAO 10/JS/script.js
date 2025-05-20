function contarVogais(texto) {
    if (typeof texto !== 'string') {
        return 'Entrada inválida';
    }
    const vogais = texto.match(/[aeiou]/gi);
    return vogais ? vogais.length : 0;
}

function contar() {
    const texto = document.getElementById('textoInput').value.trim();
    const resultado = contarVogais(texto);

    const divResultado = document.getElementById('resultado');
    divResultado.style.display = 'block';

    if (resultado === 'Entrada inválida') {
        divResultado.innerHTML = `<strong style="color: #d63384;">${resultado}</strong>`;
    } else {
        divResultado.innerHTML = `O texto tem <strong>${resultado}</strong> vogal(is).`;
    }
}