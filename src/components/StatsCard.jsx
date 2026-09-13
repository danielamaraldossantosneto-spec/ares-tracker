import playerData from "../data/playerData";

export default function StatsCard() {
  const xpTotal =
    Number(localStorage.getItem("ares_xp_total")) || 0;

  const nivel =
    Math.floor(xpTotal / 100) + 1;

  return (
    <div className="card">
      <h2>📊 Estatísticas do Guerreiro</h2>

      <p>
        ⚔️ Nível Atual: {nivel}
      </p>

      <p>
        ⚡ XP Total: {xpTotal}
      </p>

      <p>
        🏋️ Treinos Concluídos:
        {" "}
        {playerData.treinosConcluidos}
      </p>

      <p>
        🔥 Streak Atual:
        {" "}
        {playerData.streak} dias
      </p>

      <p>
        🚶 Passos Semana:
        {" "}
        {playerData.passosSemana.toLocaleString()}
      </p>

      <p>
        🫀 Cardio Semana:
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
        🧬 Gordura:
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
    </div>
  );
}