
'use client';
import { useState } from 'react';
import Link from 'next/link';


export default function LoginForm({ onSuccess, onRegister, onForgotPassword }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth/login', { // Removed .js extension
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Invalid credentials');
      }
      
      onSuccess();
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login Page</h1>
      <p className={styles.subheading}>Please enter your credentials</p>
      
      {error && <div className={styles.alertError}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            autoComplete="email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordField}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              className={styles.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              👁️
            </button>
          </div>
        </div>

        <div className={styles.formLinks}>
          <button 
            type="button" 
            onClick={onForgotPassword}
            aria-label="Forgot password"
          >
            Forgot Password?
          </button>
          <button 
            type="button" 
            onClick={onRegister}
            aria-label="Create new account"
          >
            Create Account
          </button>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? (
            <span className={styles.spinner} aria-hidden="true" />
          ) : 'Login'}
        </button>
      </form>

      <div className={styles.separator} aria-hidden="true">
        <span>OR</span>
      </div>

      <div className={styles.socialLogin}>
        <button 
          className={styles.socialBtn}
          type="button"
          aria-label="Login with Google"
        >
          <span aria-hidden="true">G</span>
          <span>Google</span>
        </button>
        <button 
          className={styles.socialBtn}
          type="button"
          aria-label="Login with Facebook"
        >
          <span aria-hidden="true">f</span>
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
}