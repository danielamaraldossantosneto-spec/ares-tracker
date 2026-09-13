export default function ProfileCard({
  nome,
  rank,
  classe,
  peso,
  nivel,
  xp,
  xpTotal,
}) {
    const xpAtual =
  Number(localStorage.getItem("ares_xp")) || 70;

const xpTotalAtual =
  Number(localStorage.getItem("ares_xp_total")) || 1540;

const nivelAtual =
  Math.floor(xpTotalAtual / 100) + 1;
  return (
    <div className="profile-card">
      <div className="profile-content">

       <div className="avatar-rpg">

  <img
    src="/daniel.jpeg"
    alt="Daniel"
    className="avatar-img"
  />

  <div className="level-badge">
    {nivelAtual}
  </div>

</div>

        <div className="profile-info">
          <h2>{nome}</h2>
          <p className="rank">
  {rank}
</p>

          <p>🏆 {classe}</p>

<p className="mission">
  🎯 Projeto Tanquinho São Paulo
</p>

          <p className="peso">
            Peso Atual: {peso} kg
          </p>
          <p className="meta-text">
  🎯 Projeto Tanquinho São Paulo
</p>

          <h3>⚔️ Nível {nivelAtual}</h3>

          <div className="level-box">
            <span>Nível {nivelAtual}</span>
            <span>{xpAtual}/100 XP</span>
          </div>

          <p>XP Total: {xpTotalAtual}</p>
          <p className="meta-atual">
  🎯 Projeto Tanquinho São Paulo
</p>

          <div className="xp-bar">
  <div
    className="xp-fill"
    style={{
      width: `${xpAtual % 100}%`,
    }}
  />

  <span className="xp-text">
    {xpAtual % 100}/100 XP
  </span>
</div>

        </div>
      </div>
    </div>
  );
}