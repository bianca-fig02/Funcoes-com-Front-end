function categorizarProduto(preco) {
    if (typeof preco !== 'number' || preco < 0) {
        return 'Preço inválido';
    }

    if (preco < 50) return 'Econômico';
    if (preco <= 100) return 'Intermediário';
    return 'Premium';
}

function categorizar() {
    const input = document.getElementById('precoInput').value.trim();
    const preco = parseFloat(input);

    const resultado = categorizarProduto(preco);
    const divResultado = document.getElementById('resultado');
    divResultado.style.display = 'block';

    if (resultado === 'Preço inválido') {
        divResultado.innerHTML = `<strong style="color: #e65100;">${resultado}</strong>`;
    } else {
        divResultado.innerHTML = `Categoria do produto: <strong>${resultado}</strong>`;
    }
}