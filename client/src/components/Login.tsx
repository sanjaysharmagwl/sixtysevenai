import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { showError, showSuccess } from '../lib/utils';
import './Auth.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState('');
  
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      showSuccess('Login successful!');
      navigate('/game-hub');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.error || 'Login failed. Please check your credentials.';
      showError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await register(email, password, name);
      showSuccess('Registration successful!');
      navigate('/game-hub');
    } catch (error: any) {
      const errorData = error?.response?.data;
      let errorMessage = 'Registration failed. Please try again.';
      
      if (errorData?.error === 'Validation error' && errorData?.details) {
        const details = errorData.details[0];
        if (details.path[0] === 'password' && details.code === 'too_small') {
          errorMessage = `Password must be at least ${details.minimum} characters long`;
        } else if (details.path[0] === 'email') {
          errorMessage = 'Please enter a valid email address';
        } else if (details.path[0] === 'name') {
          errorMessage = 'Name must be at least 2 characters long';
        } else {
          errorMessage = details.message;
        }
      } else if (errorData?.error) {
        errorMessage = errorData.error;
      }
      
      showError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>PromptForge</h1>
          <p className="tagline">Master the Art of AI Prompting</p>
        </div>

        {!showRegister ? (
          <form onSubmit={handleLogin} className="auth-form">
            <h2>Login</h2>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <p className="auth-switch">
              Don't have an account?{' '}
              <button
                type="button"
                className="link-button"
                onClick={() => setShowRegister(true)}
              >
                Register
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="auth-form">
            <h2>Register</h2>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={8}
              />
              <small style={{ color: '#999', marginTop: '4px', display: 'block' }}>Minimum 8 characters</small>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Register'}
            </button>

            <p className="auth-switch">
              Already have an account?{' '}
              <button
                type="button"
                className="link-button"
                onClick={() => setShowRegister(false)}
              >
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
