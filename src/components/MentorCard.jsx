import playerData from "../data/playerData";

export default function MentorCard() {
  const xpTotal =
    Number(localStorage.getItem("ares_xp_total")) || 0;

  const missoes =
    JSON.parse(
      localStorage.getItem("ares_missoes")
    ) || [];

  const bossHp =
    Number(localStorage.getItem("ares_boss_hp")) || 10000;

  let proximoTitulo = "🛡️ Guerreiro";
  let falta = 500 - xpTotal;

  if (xpTotal >= 500) {
    proximoTitulo = "🏆 Campeão";
    falta = 1500 - xpTotal;
  }

  if (xpTotal >= 1500) {
    proximoTitulo = "🏛️ Titã";
    falta = 3000 - xpTotal;
  }

  if (xpTotal >= 3000) {
    proximoTitulo = "👑 Semideus";
    falta = 5000 - xpTotal;
  }

  if (xpTotal >= 5000) {
    proximoTitulo = "⚔️ Deus da Guerra";
    falta = 10000 - xpTotal;
  }

  const progressoMissoes =
    Math.round((missoes.length / 4) * 100);

  let mensagem =
    "⚔️ Continue avançando, guerreiro.";

  if (progressoMissoes === 100)
    mensagem =
      "🏆 Todas as missões foram concluídas hoje.";

  else if (progressoMissoes >= 75)
    mensagem =
      "🔥 Você está muito perto de um dia perfeito.";

  else if (progressoMissoes >= 50)
    mensagem =
      "💪 Bom progresso, mas ainda há trabalho a fazer.";

  else
    mensagem =
      "⚠️ Seu potencial é maior do que seu esforço de hoje.";

  return (
    <div className="card">

      <h2>🧠 Conselho do Gepetão</h2>

      <p>
        Daniel, você é um{" "}
        <strong>
          {playerData.classe}
        </strong>
      </p>

      <p>
        ⚡ XP Total:
        {" "}
        {xpTotal}
      </p>

      <p>
        🎯 Faltam{" "}
        <strong>
          {Math.max(falta, 0)}
        </strong>
        {" "}
        XP para alcançar:
      </p>

      <p>
        <strong>
          {proximoTitulo}
        </strong>
      </p>

      <hr />

      <p>
        📋 Missões concluídas:
        {" "}
        {missoes.length}/4
      </p>

      <p>
        📈 Progresso diário:
        {" "}
        {progressoMissoes}%
      </p>

      <p>
        👹 HP do Boss:
        {" "}
        {bossHp.toLocaleString()}
      </p>

      <hr />

      <p>
        🎯 Prioridades de hoje:
      </p>

      <p>🏋️ Treino completo</p>
      <p>🚶 6000 passos</p>
      <p>🏃 3 km cardio</p>
      <p>💧 3L de água</p>

      <hr />

      <p>
        {mensagem}
      </p>

    </div>
  );
}