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
    let xpAtual =
      Number(localStorage.getItem("ares_xp")) || 0;

    let xpTotal =
      Number(localStorage.getItem("ares_xp_total")) || 0;

    if (concluidas.includes(missao.nome)) {

      const novas =
        concluidas.filter(
          (m) => m !== missao.nome
        );

      setConcluidas(novas);

      localStorage.setItem(
        "ares_missoes",
        JSON.stringify(novas)
      );

      xpAtual -= missao.xp;
      xpTotal -= missao.xp;

    } else {

      const novas = [
        ...concluidas,
        missao.nome,
      ];

      setConcluidas(novas);

      localStorage.setItem(
        "ares_missoes",
        JSON.stringify(novas)
      );

      xpAtual += missao.xp;
      xpTotal += missao.xp;
    }

    localStorage.setItem(
      "ares_xp",
      Math.max(xpAtual, 0)
    );

    localStorage.setItem(
      "ares_xp_total",
      Math.max(xpTotal, 0)
    );
  }

  const progresso =
    (concluidas.length /
      missoes.length) *
    100;

  return (
    <div className="card">

      <h2>⚔️ Missões Diárias</h2>

      <p>
        Concluídas:
        {" "}
        {concluidas.length}
        /
        {missoes.length}
      </p>

      <div className="xp-bar">
        <div
          className="xp-fill"
          style={{
            width: `${progresso}%`,
          }}
        />
      </div>

      <br />

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
                ? "rgba(34,197,94,.25)"
                : "#1a1a1a",

              border: feita
                ? "1px solid #22c55e"
                : "1px solid #333",

              transition: "0.3s",
            }}
          >
            {feita ? "✅" : "⬜"}{" "}
            {m.nome}

            <span
              style={{
                float: "right",
                fontWeight: "bold",
              }}
            >
              +{m.xp} XP
            </span>
          </div>
        );
      })}

      {progresso === 100 && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "10px",
            background:
              "rgba(255,215,0,.15)",
            border:
              "1px solid gold",
          }}
        >
          🏆 Todas as missões concluídas!
        </div>
      )}

    </div>
  );
}