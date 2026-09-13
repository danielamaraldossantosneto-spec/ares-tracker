import "./App.css";
import MissionsCard from "./components/MissionsCard";
import EvolutionCard from "./components/EvolutionCard";
import BossCard from "./components/BossCard";
import playerData from "./data/playerData";
import AchievementsCard from "./components/AchievementsCard";
import ProfileCard from "./components/ProfileCard";
import StatsCard from "./components/StatsCard";
import RecordsCard from "./components/RecordsCard";
import MentorCard from "./components/MentorCard";
import WorkoutCard from "./components/WorkoutCard";

export default function App() {
  return (
    <div className="app">

      <div className="hero">
        <h1 className="titulo">
          🏛️ ARES TRACKER V1.0
        </h1>

        <p className="subtitulo">
          Transformando disciplina em progresso.
        </p>

        <div className="hero-stats">

          <div>
            🏆 Classe: {playerData.classe}
          </div>

          <div>
            🔥 Streak: 8 dias
          </div>

          <div>
            ⚡ XP Total: {
              Number(
                localStorage.getItem("ares_xp_total")
              ) || playerData.xpTotal
            }
          </div>

          <div>
            🎯 Meta: Tanquinho
          </div>

          <div>
            💪 Peso: {playerData.peso} kg
          </div>

        </div>
      </div>

      <ProfileCard
        nome={playerData.nome}
        classe={playerData.classe}
        rank={playerData.rank}
        peso={playerData.peso}
        nivel={playerData.nivel}
        xp={playerData.xp}
        xpTotal={playerData.xpTotal}
      />

     <div className="cards-grid">
  <StatsCard />
  <RecordsCard />
  <BossCard />
  <EvolutionCard />
  <MissionsCard />
  <MentorCard />
</div>

      <WorkoutCard />

      <div className="dashboard-section">

        <div className="goal-card">
          <h2>
            🎯 Projeto Tanquinho São Paulo
          </h2>

          <div className="goal-progress">
            <div
              className="goal-fill"
              style={{
                width: `${playerData.metaAtual}%`,
              }}
            />
          </div>

          <p>
            {playerData.metaAtual}% concluído
          </p>
        </div>

        <AchievementsCard />

      </div>

    </div>
  );
}