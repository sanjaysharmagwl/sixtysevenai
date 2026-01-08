import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Login } from './components/Login';
import { GameHub } from './components/GameHub';
import { Level } from './components/Level';
import { Profile } from './components/Profile';
import { Leaderboard } from './components/Leaderboard';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/game-hub"
            element={
              <ProtectedRoute>
                <GameHub />
              </ProtectedRoute>
            }
          />
          <Route
            path="/level/:levelNumber"
            element={
              <ProtectedRoute>
                <Level />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />

          {/* Catch all - redirect to login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
