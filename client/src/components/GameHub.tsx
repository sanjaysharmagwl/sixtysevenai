import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { gamesAPI, playerAPI, questsAPI } from '../lib/api';
import { formatXP, getRankColor, showError } from '../lib/utils';
import './GameHub.css';

interface Game {
  id: string;
  name: string;
  slug: string;
  description: string;
  max_level: number;
}

interface GameProgress {
  game_id: string;
  level: number;
  completed_quests: number;
}

export function GameHub() {
  const { user, logout, updateUser } = useAuth();
  const [games, setGames] = useState<Game[]>([]);
  const [gameProgress, setGameProgress] = useState<GameProgress[]>([]);
  const [godmodeProgress, setGodmodeProgress] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [gamesData, progressData, playerData] = await Promise.all([
        gamesAPI.getAll(),
        playerAPI.getGameProgress(user!.id),
        playerAPI.getProfile(user!.id),
      ]);

      setGames(gamesData);
      setGameProgress(progressData);
      updateUser(playerData);

      // Load godmode status
      try {
        const godmodeData = await questsAPI.getGodmodeStatus(user!.id);
        setGodmodeProgress(godmodeData);
      } catch (error) {
        console.error('Failed to load godmode status:', error);
      }
    } catch (error) {
      showError('Failed to load game data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getProgressForGame = (gameId: string) => {
    return gameProgress.find((p) => p.game_id === gameId);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Game Hub...</p>
      </div>
    );
  }

  return (
    <div className="game-hub">
      {/* Header */}
      <header className="hub-header">
        <div className="header-content">
          <h1>PromptForge</h1>
          <div className="player-info">
            <div className="player-stats">
              <span className="player-name">{user?.name}</span>
              <span
                className="player-rank"
                style={{ color: getRankColor(user?.current_rank || '') }}
              >
                {user?.current_rank}
              </span>
              <span className="player-xp">{formatXP(user?.total_xp || 0)} XP</span>
            </div>
            <div className="header-actions">
              <Link to="/profile" className="btn btn-secondary">
                Profile
              </Link>
              <Link to="/leaderboard" className="btn btn-secondary">
                Leaderboard
              </Link>
              <button onClick={logout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="hub-container">
        {/* Godmode Progress Banner */}
        {godmodeProgress && !godmodeProgress.isEligible && (
          <div className="godmode-banner">
            <h3>🏆 Godmode Progress</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${godmodeProgress.godmodeProgress.xpProgress}%` }}
              />
            </div>
            <p>
              {godmodeProgress.godmodeProgress.xpProgress.toFixed(1)}% Complete
              <br />
              {godmodeProgress.godmodeProgress.levelsCompleted}/7 Levels Completed
            </p>
          </div>
        )}

        {godmodeProgress?.isEligible && (
          <div className="godmode-unlocked">
            <h2>🎉 Godmode Eligible!</h2>
            <p>You've met the requirements. Complete the ascension trials!</p>
            <Link to="/level/7" className="btn btn-primary">
              Enter Godmode Gate
            </Link>
          </div>
        )}

        {/* Games Grid */}
        <div className="games-section">
          <h2>Available Levels</h2>
          <div className="games-grid">
            {games.map((game) => {
              const progress = getProgressForGame(game.id);
              const currentLevel = progress?.level || 1;
              const isLocked = currentLevel > 1 && !progress;

              return (
                <div
                  key={game.id}
                  className={`game-card ${isLocked ? 'locked' : ''}`}
                >
                  <div className="game-header">
                    <h3>{game.name}</h3>
                    {isLocked && <span className="lock-icon">🔒</span>}
                  </div>
                  <p className="game-description">{game.description}</p>
                  <div className="game-stats">
                    <span>Level {currentLevel}/{game.max_level}</span>
                    {progress && (
                      <span>{progress.completed_quests} quests completed</span>
                    )}
                  </div>
                  {!isLocked && (
                    <Link
                      to={`/level/${currentLevel}`}
                      className="btn btn-primary"
                    >
                      {currentLevel === 1 ? 'Start' : 'Continue'}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <Link to="/level/1" className="quick-link">
              <span className="icon">⚡</span>
              <span>Level 1</span>
            </Link>
            <Link to="/profile" className="quick-link">
              <span className="icon">👤</span>
              <span>My Profile</span>
            </Link>
            <Link to="/leaderboard" className="quick-link">
              <span className="icon">🏆</span>
              <span>Leaderboard</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
