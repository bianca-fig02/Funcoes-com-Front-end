function media(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return 0;
    }

    const somentenumeros = numeros.filter(n => typeof n === "number" && !isNaN(n));

    if (somentenumeros.length === 0) {
        return 0;
    }

    const soma = somentenumeros.reduce((total, num) => total + num, 0);
    return soma / somentenumeros.length;
}

function calcularMedia() {
    const input = document.getElementById('numerosInput').value.trim();
    let array;

    try {
        // Converte a string em array tentando como JSON primeiro
        array = JSON.parse(`[${input}]`);
    } catch (e) {
        // Se falhar, tenta dividir por vírgulas e limpar espaços
        array = input.split(',').map(item => {
            item = item.trim();
            if (item === 'null') return null;
            if (item === 'undefined') return undefined;
            if (!isNaN(item)) return parseFloat(item);
            if (item.startsWith("'") && item.endsWith("'")) return item.slice(1, -1);
            return item;
        });
    }

    const resultado = media(array);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = 
      `A média dos números válidos é: <strong>${resultado.toFixed(2)}</strong>`;
}