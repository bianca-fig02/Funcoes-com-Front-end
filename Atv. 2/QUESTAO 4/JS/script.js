function gerarSenha(comprimento) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";

    if (typeof comprimento !== 'number' || comprimento < 6) {
        return 'Comprimento inválido (mínimo 6 caracteres)';
    }

    let senha = [];
    senha.push(caracteres[Math.floor(Math.random() * caracteres.length)]);
    for (let i = senha.length; i < comprimento; i++) {
        senha.push(caracteres[Math.floor(Math.random() * caracteres.length)]);
    }

    return senha.sort(() => 0.5 - Math.random()).join('');
}

function gerar() {
    const input = document.getElementById("comprimento");
    const output = document.getElementById("senhaOutput");
    const msg = document.getElementById("msgCopiado");

    const comprimento = parseInt(input.value);
    const senha = gerarSenha(comprimento);

    output.textContent = senha;
    msg.classList.remove("show");
}

function copiarSenha() {
    const output = document.getElementById("senhaOutput");
    const msg = document.getElementById("msgCopiado");

    const texto = output.textContent;

    if (!texto || texto.includes("inválido")) {
        alert("Gere uma senha válida antes de copiar!");
        return;
    }

    navigator.clipboard.writeText(texto).then(() => {
        msg.textContent = "✅ Senha copiada!";
        msg.classList.add("show");

        setTimeout(() => {
            msg.classList.remove("show");
        }, 2000);
    }).catch(() => {
        alert("Erro ao copiar.");
    });
}