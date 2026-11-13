
import { missoes, afirmacoes, escolherAleatorio } from "./missoes.js";

import { gerarNome } from "./nomes.js";

const botaoJogar = document.getElementById("botaoJogar");

const resultado = document.getElementById("resultado");

function iniciarMissao() {

    const nome = gerarNome();

    const missao = escolherAleatorio(missoes);

    const afirmacao = escolherAleatorio(afirmacoes);

    resultado.innerHTML = `
        <h2>Olá, ${nome}!</h2>

        <p><strong>Sua missão:</strong></p>

        <p>${missao}</p>

        <p><strong>Uma mensagem para você:</strong></p>

        <p>${afirmacao}</p>
    `;

    botaoJogar.textContent = "Jogar novamente";
}

botaoJogar.addEventListener("click", iniciarMissao);
