import { useEffect, useState } from "react";

export default function BossCard() {
  const [hp, setHp] = useState(10000);

  const xpTotal =
    Number(localStorage.getItem("ares_xp_total")) || 0;

  let boss = {
    nome: "🐺 Lobo Sombrio",
    hpMax: 10000,
    recompensa: 500,
    cor: "#ef4444",
  };

  if (xpTotal >= 1000) {
    boss = {
      nome: "👹 Minotauro",
      hpMax: 20000,
      recompensa: 1000,
      cor: "#f97316",
    };
  }

  if (xpTotal >= 3000) {
    boss = {
      nome: "🐉 Dragão Ancião",
      hpMax: 50000,
      recompensa: 2000,
      cor: "#8b5cf6",
    };
  }

  if (xpTotal >= 5000) {
    boss = {
      nome: "⚔️ Ares",
      hpMax: 100000,
      recompensa: 5000,
      cor: "#eab308",
    };
  }

  useEffect(() => {
    const hpSalvo =
      Number(localStorage.getItem("ares_boss_hp")) ||
      boss.hpMax;

    setHp(hpSalvo);
  }, [boss.hpMax]);

  const porcentagem =
    Math.max((hp / boss.hpMax) * 100, 0);

  let status = "💪 Boss em força máxima";

  if (porcentagem <= 75)
    status = "🔥 O boss começou a enfraquecer";

  if (porcentagem <= 50)
    status = "⚠️ Boss gravemente ferido";

  if (porcentagem <= 25)
    status = "☠️ Boss perto da derrota";

  return (
    <div className="card">
      <h2>{boss.nome}</h2>

      <p>
        🎯 Projeto Tanquinho São Paulo
      </p>

      <p>
        ❤️ HP: {hp.toLocaleString()} /{" "}
        {boss.hpMax.toLocaleString()}
      </p>

      <div
        style={{
          width: "100%",
          height: "14px",
          background: "#222",
          borderRadius: "999px",
          overflow: "hidden",
          marginTop: "12px",
        }}
      >
        <div
          style={{
            width: `${porcentagem}%`,
            height: "100%",
            background: boss.cor,
            transition: "0.5s",
          }}
        />
      </div>

      <p
        style={{
          marginTop: "12px",
          fontWeight: "bold",
        }}
      >
        {status}
      </p>

      <hr />

      <p>
        🏆 Recompensa:
        {" "}
        {boss.recompensa.toLocaleString()}
        {" "}
        XP
      </p>

      <p>
        ⚔️ Derrote o boss completando
        missões e treinos.
      </p>
    </div>
  );
}