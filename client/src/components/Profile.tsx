import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { xpAPI } from '../lib/api';
import { formatXP, getRankColor, formatDate, showError } from '../lib/utils';
import './Profile.css';

export function Profile() {
  const { user, logout } = useAuth();
  const [xpHistory, setXpHistory] = useState<any[]>([]);
  const [ranks, setRanks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [xpData, ranksData] = await Promise.all([
        xpAPI.getHistory(user!.id),
        xpAPI.getRanks(),
      ]);

      setXpHistory(Array.isArray(xpData) ? xpData : []);
      setRanks(Array.isArray(ranksData) ? ranksData : []);
    } catch (error) {
      showError('Failed to load profile data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentRankInfo = () => {
    return ranks.find((r) => r.rank === user?.current_rank);
  };

  const getNextRankInfo = () => {
    const currentIndex = ranks.findIndex((r) => r.rank === user?.current_rank);
    return ranks[currentIndex + 1] || null;
  };

  const calculateProgress = () => {
    const currentRank = getCurrentRankInfo();
    const nextRank = getNextRankInfo();
    
    if (!currentRank || !nextRank) return 100;
    
    const currentXP = user?.total_xp || 0;
    const minXP = currentRank.min_xp;
    const maxXP = nextRank.min_xp;
    
    return ((currentXP - minXP) / (maxXP - minXP)) * 100;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Profile...</p>
      </div>
    );
  }

  const nextRank = getNextRankInfo();
  const progress = calculateProgress();

  return (
    <div className="profile-container">
      <header className="profile-header">
        <Link to="/game-hub" className="back-button">
          ← Back to Hub
        </Link>
        <h1>Player Profile</h1>
        <button onClick={logout} className="btn btn-secondary">
          Logout
        </button>
      </header>

      <div className="profile-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar">
            <span className="avatar-icon">👤</span>
          </div>
          <h2>{user?.name}</h2>
          <p className="email">{user?.email}</p>
          <div
            className="rank-badge"
            style={{ background: getRankColor(user?.current_rank || '') }}
          >
            {user?.current_rank}
          </div>
          <div className="xp-display">
            <span className="xp-amount">{formatXP(user?.total_xp || 0)}</span>
            <span className="xp-label">Total XP</span>
          </div>
        </div>

        {/* Progress to Next Rank */}
        {nextRank && (
          <div className="rank-progress-card">
            <h3>Progress to {nextRank.rank}</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="progress-text">
              {user?.total_xp} / {nextRank.min_xp} XP ({progress.toFixed(1)}%)
            </p>
          </div>
        )}

        {/* All Ranks */}
        <div className="ranks-section">
          <h3>All Ranks</h3>
          <div className="ranks-grid">
            {ranks.map((rank) => {
              const isCurrentRank = rank.rank === user?.current_rank;
              const isPastRank = (user?.total_xp || 0) >= rank.min_xp;

              return (
                <div
                  key={rank.rank}
                  className={`rank-item ${isCurrentRank ? 'current' : ''} ${
                    isPastRank ? 'achieved' : 'locked'
                  }`}
                >
                  <div
                    className="rank-icon"
                    style={{
                      background: isPastRank
                        ? getRankColor(rank.rank)
                        : '#4b5563',
                    }}
                  >
                    {isPastRank ? '✓' : '🔒'}
                  </div>
                  <div className="rank-info">
                    <h4>{rank.rank}</h4>
                    <p>{rank.min_xp.toLocaleString()} XP</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* XP History */}
        {xpHistory.length > 0 && (
          <div className="xp-history-section">
            <h3>Recent XP Gains</h3>
            <div className="xp-history-list">
              {xpHistory.slice(0, 10).map((entry: any) => (
                <div key={entry.id || entry.created_at} className="xp-entry">
                  <div className="xp-entry-info">
                    <span className="xp-source">{entry.source || 'Quest Completion'}</span>
                    <span className="xp-date">{formatDate(entry.created_at)}</span>
                  </div>
                  <span className="xp-amount">+{entry.xp_gained} XP</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-icon">🎯</span>
            <span className="stat-value">{xpHistory.length}</span>
            <span className="stat-label">Quests Completed</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">⚡</span>
            <span className="stat-value">{formatXP(user?.total_xp || 0)}</span>
            <span className="stat-label">Total XP</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏆</span>
            <span className="stat-value">{user?.current_rank}</span>
            <span className="stat-label">Current Rank</span>
          </div>
        </div>
      </div>
    </div>
  );
}
