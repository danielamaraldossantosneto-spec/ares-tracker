import { useState, useEffect } from "react";

export default function WorkoutCard() {
  const treinos = {
    Segunda: [
      "Supino Inclinado",
      "Supino Halteres",
      "Supino Máquina",
      "Crossover",
      "Elevação Lateral",
      "Tríceps Francês",
      "Tríceps Corda",
    ],

    Terça: [
      "Barra Fixa",
      "Remada Curvada",
      "Remada Baixa",
      "Pulldown",
      "Rosca Direta",
      "Rosca Martelo",
    ],

    Quarta: [
      "Hip Thrust",
      "Mesa Flexora",
      "Stiff",
      "Abdutora",
      "Panturrilha",
    ],

    Quinta: [
      "Agachamento Livre",
      "Leg Press",
      "Cadeira Extensora",
      "Mesa Flexora",
      "Panturrilha",
    ],

    Sexta: [
      "Desenvolvimento",
      "Elevação Lateral",
      "Rosca Direta",
      "Rosca Scott",
      "Tríceps Testa",
      "Tríceps Corda",
    ],

    Sábado: [
      "Supino Inclinado",
      "Supino Reto",
      "Crucifixo",
      "Paralelas",
      "Tríceps Francês",
    ],
  };

  const [dia, setDia] = useState("Segunda");

  const [concluidos, setConcluidos] = useState(() => {
    const salvo = localStorage.getItem("ares_treinos");
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "ares_treinos",
      JSON.stringify(concluidos)
    );
  }, [concluidos]);

function marcar(exercicio) {
  const chave = `${dia}-${exercicio}`;

  let xpAtual =
    Number(localStorage.getItem("ares_xp")) || 70;

  let xpTotalAtual =
    Number(localStorage.getItem("ares_xp_total")) || 1540;

  if (concluidos.includes(chave)) {

    setConcluidos(
      concluidos.filter((e) => e !== chave)
    );

    xpAtual -= 10;
    xpTotalAtual -= 10;

  } else {

    setConcluidos([
      ...concluidos,
      chave
    ]);

    xpAtual += 10;
    xpTotalAtual += 10;
  }

  localStorage.setItem(
    "ares_xp",
    xpAtual
  );

  localStorage.setItem(
    "ares_xp_total",
    xpTotalAtual
  );
const bossHp =
  Number(localStorage.getItem("ares_boss_hp")) ||
  10000;

const novoHp = Math.max(
  bossHp - 100,
  0
);

localStorage.setItem(
  "ares_boss_hp",
  novoHp
);

if (novoHp === 0) {
  alert(
    "🏆 BOSS DERROTADO! +500 XP"
  );

  localStorage.setItem(
    "ares_boss_hp",
    10000
  );

  localStorage.setItem(
    "ares_xp_total",
    xpTotalAtual + 500
  );
}
  window.location.reload();
}

  const feitos = treinos[dia].filter((e) =>
    concluidos.includes(`${dia}-${e}`)
  ).length;

  const total = treinos[dia].length;

  const progresso = (feitos / total) * 100;

  return (
    <div className="workout-card">

      <div className="dias-container">
        {Object.keys(treinos).map((d) => (
          <button
            key={d}
            onClick={() => setDia(d)}
            className={
              dia === d
                ? "dia-btn ativo"
                : "dia-btn"
            }
          >
            {d}
          </button>
        ))}
      </div>

      <h2 className="dia-titulo">
        🔴 {dia}
      </h2>

      <p className="progresso-texto">
        Progresso: {feitos}/{total}
      </p>

      <div className="barra">
        <div
          className="barra-preenchida"
          style={{
            width: `${progresso}%`,
          }}
        />
      </div>

      {treinos[dia].map((exercicio) => {
        const concluido = concluidos.includes(
          `${dia}-${exercicio}`
        );

        return (
          <div
            key={exercicio}
            className={
              concluido
                ? "exercicio concluido"
                : "exercicio"
            }
            onClick={() =>
              marcar(exercicio)
            }
          >
            {concluido ? "✅" : "⬜"} {exercicio}
          </div>
        );
      })}
    </div>
  );
}