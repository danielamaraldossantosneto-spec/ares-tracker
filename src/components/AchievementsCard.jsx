export default function AchievementsCard() {

const xpTotal =
  Number(localStorage.getItem("ares_xp_total")) || 0;

const conquistas = [
  {
    nome: "⚔️ Nível 10",
    desbloqueada: xpTotal >= 1000,
  },
  {
    nome: "💎 Diamante",
    desbloqueada: xpTotal >= 2000,
  },
  {
    nome: "👑 Titã",
    desbloqueada: xpTotal >= 5000,
  },
];

  return (
    <div className="card">
      <h2>🏅 Conquistas</h2>

      {conquistas.map((c) => (
        <p key={c.nome}>
          {c.desbloqueada
            ? "✅"
            : "🔒"}{" "}
          {c.nome}
        </p>
      ))}
    </div>
  );
}