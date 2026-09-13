const xpTotal = 1540;

let classe;
let rank;

if (xpTotal >= 5000)
  rank = "💎 Diamante";
else if (xpTotal >= 3000)
  rank = "🥇 Ouro";
else if (xpTotal >= 1500)
  rank = "🥈 Prata";
else if (xpTotal >= 500)
  rank = "🥉 Bronze";
else
  rank = "🌱 Novato";

if (xpTotal >= 5000)
  classe = "⚔️ Deus da Guerra";
else if (xpTotal >= 3000)
  classe = "👑 Titã";
else if (xpTotal >= 1500)
  classe = "🏆 Campeão";
else if (xpTotal >= 500)
  classe = "🛡️ Guerreiro";
else
  classe = "🌱 Iniciante";

export default {
  nome: "Daniel Amaral",
  rank,
  peso: 79,
  gordura: "14%",
  nivel: 1,
  xp: 0,
  xpTotal: 0,
  classe,

  metaAtual: 65,
  metaNome: "Projeto Tanquinho São Paulo",

  passosSemana: 72000,
  cardioSemana: "35 km",

  treinosConcluidos: 124,
  streak: 8,
};