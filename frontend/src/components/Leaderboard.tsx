import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { formatXP, getRankColor, showError } from '../lib/utils';
import './Leaderboard.css';

interface LeaderboardPlayer {
  id: string;
  name: string;
  current_rank: string;
  total_xp: number;
  position?: number;
}

export function Leaderboard() {
  const { user } = useAuth();
  const [players, setPlayers] = useState<LeaderboardPlayer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeaderboard();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(loadLeaderboard, 30000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadLeaderboard = async () => {
    try {
      // Note: You may need to add a leaderboard endpoint to your API
      // For now, we'll use a placeholder
      // const data = await playerAPI.getLeaderboard();
      
      // Placeholder data - replace with actual API call
      const mockData: LeaderboardPlayer[] = [
        { id: '1', name: 'PromptMaster', current_rank: 'Godmode', total_xp: 50000 },
        { id: '2', name: 'AIWhisperer', current_rank: 'Legend', total_xp: 42000 },
        { id: '3', name: 'CodeNinja', current_rank: 'Legend', total_xp: 39000 },
        { id: '4', name: 'TechGuru', current_rank: 'Grandmaster', total_xp: 35000 },
        { id: '5', name: 'PromptWizard', current_rank: 'Grandmaster', total_xp: 32000 },
      ];
      
      // Add current user if not in top list
      if (user && !mockData.find(p => p.id === user.id)) {
        mockData.push({
          id: user.id,
          name: user.name,
          current_rank: user.current_rank,
          total_xp: user.total_xp,
        });
      }
      
      // Sort by XP
      const sorted = mockData.sort((a, b) => b.total_xp - a.total_xp);
      
      // Add positions
      const withPositions = sorted.map((player, index) => ({
        ...player,
        position: index + 1,
      }));
      
      setPlayers(withPositions);
    } catch (error) {
      showError('Failed to load leaderboard');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getMedalEmoji = (position: number) => {
    switch (position) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Leaderboard...</p>
      </div>
    );
  }

  return (
    <div className="leaderboard-container">
      <header className="leaderboard-header">
        <Link to="/game-hub" className="back-button">
          ← Back to Hub
        </Link>
        <h1>🏆 Leaderboard</h1>
        <Link to="/profile" className="btn btn-secondary">
          My Profile
        </Link>
      </header>

      <div className="leaderboard-content">
        <div className="leaderboard-info">
          <p>Top players ranked by total XP earned</p>
          <button onClick={loadLeaderboard} className="refresh-btn">
            🔄 Refresh
          </button>
        </div>

        <div className="leaderboard-table">
          <div className="table-header">
            <span className="col-rank">Rank</span>
            <span className="col-player">Player</span>
            <span className="col-level">Level</span>
            <span className="col-xp">XP</span>
          </div>

          {players.map((player) => {
            const isCurrentUser = player.id === user?.id;
            const medal = getMedalEmoji(player.position || 0);

            return (
              <div
                key={player.id}
                className={`table-row ${isCurrentUser ? 'current-user' : ''}`}
              >
                <span className="col-rank">
                  {medal || `#${player.position}`}
                </span>
                <span className="col-player">
                  {player.name}
                  {isCurrentUser && <span className="you-badge">YOU</span>}
                </span>
                <span
                  className="col-level"
                  style={{ color: getRankColor(player.current_rank) }}
                >
                  {player.current_rank}
                </span>
                <span className="col-xp">{formatXP(player.total_xp)}</span>
              </div>
            );
          })}
        </div>

        {/* Current User Position */}
        {user && (
          <div className="user-position-card">
            <h3>Your Position</h3>
            <div className="position-stats">
              <div className="position-stat">
                <span className="stat-label">Rank</span>
                <span className="stat-value">
                  #{players.find((p) => p.id === user.id)?.position || 'N/A'}
                </span>
              </div>
              <div className="position-stat">
                <span className="stat-label">Level</span>
                <span
                  className="stat-value"
                  style={{ color: getRankColor(user.current_rank) }}
                >
                  {user.current_rank}
                </span>
              </div>
              <div className="position-stat">
                <span className="stat-label">XP</span>
                <span className="stat-value">{formatXP(user.total_xp)}</span>
              </div>
            </div>
          </div>
        )}

        <div className="leaderboard-footer">
          <p>Leaderboard updates every 30 seconds</p>
        </div>
      </div>
    </div>
  );
}
