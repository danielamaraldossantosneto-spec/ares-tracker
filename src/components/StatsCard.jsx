import playerData from "../data/playerData";

export default function StatsCard() {
  const xpTotal =
    Number(localStorage.getItem("ares_xp_total")) || 0;

  const nivel =
    Math.floor(xpTotal / 100) + 1;

  const xpAtual =
    xpTotal % 100;

  const xpProximoNivel = 100;

  let titulo;

  if (xpTotal >= 10000)
    titulo = "⚔️ Deus da Guerra";
  else if (xpTotal >= 5000)
    titulo = "👑 Semideus";
  else if (xpTotal >= 3000)
    titulo = "🏛️ Titã";
  else if (xpTotal >= 1500)
    titulo = "🏆 Campeão";
  else if (xpTotal >= 500)
    titulo = "🛡️ Guerreiro";
  else
    titulo = "🌱 Iniciante";

  const progressoNivel =
    (xpAtual / xpProximoNivel) * 100;

  return (
    <div className="card">

      <h2>📊 Estatísticas do Guerreiro</h2>

      <p>
        👑 Título: {titulo}
      </p>

      <p>
        ⚔️ Nível: {nivel}
      </p>

      <p>
        🏆 Rank: {playerData.rank}
      </p>

      <p>
        ⚡ XP Total: {xpTotal}
      </p>

      <p>
        🔋 XP Atual:
        {" "}
        {xpAtual}
        /
        {xpProximoNivel}
      </p>

      <div className="xp-bar">
        <div
          className="xp-fill"
          style={{
            width: `${progressoNivel}%`,
          }}
        />
      </div>

      <hr />

      <h3>🏋️ Desempenho</h3>

      <p>
        🏋️ Treinos:
        {" "}
        {playerData.treinosConcluidos}
      </p>

      <p>
        🔥 Streak:
        {" "}
        {playerData.streak} dias
      </p>

      <p>
        🚶 Passos Semana:
        {" "}
        {playerData.passosSemana.toLocaleString()}
      </p>

      <p>
        🫀 Cardio:
        {" "}
        {playerData.cardioSemana}
      </p>

      <hr />

      <h3>📏 Evolução Física</h3>

      <p>
        ⚖️ Peso:
        {" "}
        {playerData.peso} kg
      </p>

      <p>
        🧬 BF:
        {" "}
        {playerData.gordura}
      </p>

      <p>
        💪 Braço:
        {" "}
        40 cm
      </p>

      <p>
        📏 Cintura:
        {" "}
        81 cm
      </p>

      <p>
        🦵 Coxa:
        {" "}
        60 cm
      </p>

      <p>
        🍑 Glúteo:
        {" "}
        103 cm
      </p>

      <hr />

      <p>
        🎯 Objetivo:
        Projeto Tanquinho São Paulo
      </p>

    </div>
  );
}