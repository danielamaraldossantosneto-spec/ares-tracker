import { useEffect, useState } from "react";

export default function BossCard() {
  const [hp, setHp] = useState(10000);

  useEffect(() => {
    const hpSalvo =
      Number(localStorage.getItem("ares_boss_hp")) ||
      10000;

    setHp(hpSalvo);
  }, []);

  const porcentagem = (hp / 10000) * 100;

  return (
    <div className="card">
      <h2>👹 Boss Atual</h2>

      <p>🎯 Projeto Tanquinho São Paulo</p>

      <p>❤️ HP: {hp} / 10000</p>

      <div
        style={{
          width: "100%",
          height: "12px",
          background: "#333",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: `${porcentagem}%`,
            height: "100%",
            background: "#ef4444",
            transition: "0.5s",
          }}
        />
      </div>

      <p style={{ marginTop: "10px" }}>
        🏆 Recompensa: +500 XP
      </p>
    </div>
  );
  const xpTotal =
  Number(localStorage.getItem("ares_xp_total")) || 0;

let bossNome = "🐺 Lobo Sombrio";
let bossHpMax = 10000;

if (xpTotal >= 1000) {
  bossNome = "👹 Minotauro";
  bossHpMax = 20000;
}

if (xpTotal >= 3000) {
  bossNome = "🐉 Dragão Ancião";
  bossHpMax = 50000;
}

if (xpTotal >= 5000) {
  bossNome = "⚔️ Ares";
  bossHpMax = 100000;
}
}