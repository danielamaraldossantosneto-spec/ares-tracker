import playerData from "../data/playerData";

export default function StatsCard() {
  const xpTotal =
    Number(localStorage.getItem("ares_xp_total")) || 0;

  return (
    <div className="card">
      <h2>📊 Estatísticas</h2>

      <p>
        🏋️ Treinos: {playerData.treinosConcluidos}
      </p>

      <p>
        🔥 Streak: {playerData.streak} dias
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

      <p>
        ⚡ XP Total:
        {" "}
        {xpTotal}
      </p>

      <p>
        🧬 Gordura:
        {" "}
        {playerData.gordura}
      </p>
    </div>
  );
}