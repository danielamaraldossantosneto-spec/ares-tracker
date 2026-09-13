import playerData from "../data/playerData";

export default function MentorCard() {
  const xpTotal =
    Number(localStorage.getItem("ares_xp_total")) || 0;

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

  return (
    <div className="card">
      <h2>🧠 Conselho do Gepetão</h2>

      <p>
        Daniel, você está no nível{" "}
        {playerData.nivel}.
      </p>

      <p>
        Classe atual:
        {" "}
        {playerData.classe}
      </p>

      <p>
        XP Total:
        {" "}
        {xpTotal}
      </p>

      <p>
        Faltam{" "}
        {Math.max(falta, 0)}
        {" "}
        XP para:
      </p>

      <p>
        {proximoTitulo}
      </p>

      <hr />

      <p>
        🎯 Meta de hoje:
      </p>

      <p>
        🚶 6000 passos
      </p>

      <p>
        🫀 3 km cardio
      </p>

      <p>
        🏋️ Treino completo
      </p>

      <p>
        ⚔️ Continue avançando,
        guerreiro.
      </p>
    </div>
  );
}