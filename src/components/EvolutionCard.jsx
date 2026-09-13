export default function EvolutionCard() {
  const pesoInicial = 81;
  const pesoAtual = 79;

  const gorduraInicial = 18;
  const gorduraAtual = 14;

  return (
    <div className="card">
      <h2>📈 Evolução Física</h2>

      <p>
        ⚖️ Peso: {pesoInicial}kg → {pesoAtual}kg
      </p>

      <p>
        🧬 Gordura: {gorduraInicial}% → {gorduraAtual}%
      </p>

      <p>
        🔥 Resultado:
        {" "}
        {pesoInicial - pesoAtual}kg eliminados
      </p>

      <div className="goal-progress">
        <div
          className="goal-fill"
          style={{
            width: "65%",
          }}
        />
      </div>

      <p>
        🎯 Shape São Paulo: 65%
      </p>
    </div>
  );
}