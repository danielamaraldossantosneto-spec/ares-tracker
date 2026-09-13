export default function RecordsCard() {
  const records = [
    { nome: "Hip Thrust", carga: "130 kg" },
    { nome: "Agachamento Livre", carga: "120 kg" },
    { nome: "Leg Press", carga: "240 kg" },
    { nome: "Supino Inclinado", carga: "32 kg" },
    { nome: "Stiff", carga: "120 kg" },
  ];

  return (
    <div className="card">
      <h2>🏆 Recordes</h2>

      {records.map((r) => (
        <p key={r.nome}>
          {r.nome}: <strong>{r.carga}</strong>
        </p>
      ))}
    </div>
  );
}