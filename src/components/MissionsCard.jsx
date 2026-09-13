import { useState } from "react";

export default function MissionsCard() {
  const [concluidas, setConcluidas] = useState(() => {
    const salvo =
      localStorage.getItem("ares_missoes");

    return salvo
      ? JSON.parse(salvo)
      : [];
  });

  const missoes = [
    {
      nome: "🏋️ Fazer treino do dia",
      xp: 50,
    },
    {
      nome: "🚶 6.000 passos",
      xp: 30,
    },
    {
      nome: "🏃 3 km cardio",
      xp: 30,
    },
    {
      nome: "💧 Beber 3L de água",
      xp: 20,
    },
  ];

  function concluirMissao(missao) {
    if (concluidas.includes(missao.nome))
      return;

    const novas = [
      ...concluidas,
      missao.nome,
    ];

    setConcluidas(novas);

    localStorage.setItem(
      "ares_missoes",
      JSON.stringify(novas)
    );

    const xpAtual =
      Number(localStorage.getItem("ares_xp")) || 0;

    const xpTotal =
      Number(localStorage.getItem("ares_xp_total")) || 0;

    localStorage.setItem(
      "ares_xp",
      xpAtual + missao.xp
    );

    localStorage.setItem(
      "ares_xp_total",
      xpTotal + missao.xp
    );

    alert(
      `🏆 Missão concluída! +${missao.xp} XP`
    );
  }

  return (
    <div className="card">
      <h2>⚔️ Missões Diárias</h2>

      {missoes.map((m) => {
        const feita =
          concluidas.includes(m.nome);

        return (
          <div
            key={m.nome}
            onClick={() =>
              concluirMissao(m)
            }
            style={{
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              background: feita
                ? "#0f5132"
                : "#1a1a1a",
            }}
          >
            {feita ? "✅" : "⬜"} {m.nome}

            <span
              style={{
                float: "right",
              }}
            >
              +{m.xp} XP
            </span>
          </div>
        );
      })}
    </div>
  );
}