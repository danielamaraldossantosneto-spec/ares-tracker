import { useEffect, useState } from "react";

import "./App.css";

import MissionsCard from "./components/MissionsCard";
import EvolutionCard from "./components/EvolutionCard";
import BossCard from "./components/BossCard";
import AchievementsCard from "./components/AchievementsCard";
import ProfileCard from "./components/ProfileCard";
import StatsCard from "./components/StatsCard";
import RecordsCard from "./components/RecordsCard";
import WorkoutCard from "./components/WorkoutCard";
import MentorCard from "./components/MentorCard";

import playerData from "./data/playerData";

import { loadPlayer } from "./services/playerService";

export default function App() {

  const [player, setPlayer] = useState(null);

  useEffect(() => {

    async function carregar() {

      const dados = await loadPlayer();

      if (dados) {
        setPlayer(dados);
      }

    }

    carregar();

  }, []);

  if (!player) {

    return (
      <div className="app">
        <h1>Carregando ARES...</h1>
      </div>
    );

  }

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
            🏆 Classe:
            {" "}
            {playerData.classe}
          </div>

          <div>
            🔥 Streak:
            {" "}
            {playerData.streak} dias
          </div>

          <div>
            ⚡ XP Total:
            {" "}
            {player.xp_total}
          </div>

          <div>
            🎯 Meta:
            {" "}
            Tanquinho
          </div>

          <div>
            💪 Peso:
            {" "}
            {player.peso} kg
          </div>

        </div>

      </div>

      <ProfileCard
        nome={player.nome}
        classe={playerData.classe}
        rank={playerData.rank}
        peso={player.peso}
        nivel={playerData.nivel}
        xp={playerData.xp}
        xpTotal={player.xp_total}
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