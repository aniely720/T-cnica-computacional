
export const missoes = [
    "Aprenda algo novo hoje!",
    "Ajude alguém que precisa!",
    "Faça algo que você sempre teve vontade!",
    "Organize seu espaço de estudos!",
    "Leia algumas páginas de um livro!",
    "Desenvolva uma nova habilidade!"
];

export const afirmacoes = [
    "Você é capaz de alcançar seus objetivos!",
    "Cada pequeno passo importa!",
    "A persistência é o caminho do sucesso!",
    "Nunca desista dos seus sonhos!",
    "Hoje é uma nova oportunidade!",
    "Acredite no seu potencial!"
];

export function escolherAleatorio(lista) {
    const indice = Math.floor(Math.random() * lista.length);

    return lista[indice];
}
