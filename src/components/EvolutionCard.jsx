export default function EvolutionCard() {
  const pesoInicial = 81;
  const pesoAtual = 79;
  const pesoMeta = 75;

  const gorduraInicial = 18;
  const gorduraAtual = 14;
  const gorduraMeta = 10;

  const progressoPeso =
    ((pesoInicial - pesoAtual) /
      (pesoInicial - pesoMeta)) *
    100;

  const progressoGordura =
    ((gorduraInicial - gorduraAtual) /
      (gorduraInicial - gorduraMeta)) *
    100;

  return (
    <div className="card">
      <h2>📈 Evolução Física</h2>

      <p>
        ⚖️ Peso Atual: {pesoAtual}kg
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
        🎯 Meta: {pesoMeta}kg
      </p>

      <br />

      <p>
        🧬 BF Atual: {gorduraAtual}%
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

      <p>
        🎯 Meta BF: {gorduraMeta}%
      </p>

      <hr />

      <p>
        🏛️ Projeto Tanquinho São Paulo
      </p>

      <p>
        Progresso Geral:
        {" "}
        {Math.round(
          (progressoPeso +
            progressoGordura) /
            2
        )}
        %
      </p>
    </div>
  );
}