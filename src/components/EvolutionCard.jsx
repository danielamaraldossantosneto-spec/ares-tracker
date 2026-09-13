export default function EvolutionCard() {
  const pesoAtual = 79;
  const pesoMeta = 75;

  const gorduraAtual = 14;
  const gorduraMeta = 10;

  const progressoPeso =
    ((81 - pesoAtual) / (81 - pesoMeta)) * 100;

  const progressoGordura =
    ((18 - gorduraAtual) / (18 - gorduraMeta)) * 100;

  return (
    <div className="card">
      <h2>📈 Evolução Física</h2>

      <p>
        ⚖️ Peso: {pesoAtual}kg / {pesoMeta}kg
      </p>

      <div className="xp-bar">
        <div
          className="xp-fill"
          style={{
            width: `${Math.min(
              progressoPeso,
              100
            )}%`,
          }}
        />
      </div>

      <p>
        🧬 Gordura: {gorduraAtual}% / {gorduraMeta}%
      </p>

      <div className="xp-bar">
        <div
          className="xp-fill"
          style={{
            width: `${Math.min(
              progressoGordura,
              100
            )}%`,
          }}
        />
      </div>

      <p style={{ marginTop: "15px" }}>
        🎯 Projeto Tanquinho São Paulo
      </p>
    </div>
  );
}