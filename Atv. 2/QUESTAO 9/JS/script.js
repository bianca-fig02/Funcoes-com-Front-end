function encontrarNumeroPrimo(numero) {
    if (typeof numero !== 'number' || numero < 2 || !Number.isInteger(numero)) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }

    return true;
}

function verificarPrimo() {
    const input = document.getElementById('numeroInput').value.trim();
    const numero = parseInt(input, 10);
    const divResultado = document.getElementById('resultado');
    divResultado.style.display = 'block';

    if (isNaN(numero) || numero < 0) {
        divResultado.innerHTML = `<strong style="color: #d32f2f;">Erro: Digite um número inteiro positivo válido.</strong>`;
        return;
    }

    const resultado = encontrarNumeroPrimo(numero);

    if (resultado) {
        divResultado.innerHTML = `O número <strong>${numero}</strong> é <strong>primo</strong>.`;
    } else {
        divResultado.innerHTML = `O número <strong>${numero}</strong> <strong>NÃO</strong> é primo.`;
    }
}