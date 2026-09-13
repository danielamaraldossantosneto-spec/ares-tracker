export default function AchievementsCard() {

  const xpTotal =
    Number(localStorage.getItem("ares_xp_total")) || 0;

  const conquistas = [

    {
      nome: "🌱 Primeiro Passo",
      desbloqueada: xpTotal >= 10,
    },

    {
      nome: "⚔️ Guerreiro",
      desbloqueada: xpTotal >= 500,
    },

    {
      nome: "🏆 Campeão",
      desbloqueada: xpTotal >= 1500,
    },

    {
      nome: "👑 Titã",
      desbloqueada: xpTotal >= 3000,
    },

    {
      nome: "💎 Deus da Guerra",
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