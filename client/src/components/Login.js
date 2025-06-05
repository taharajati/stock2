import React, { useEffect, useState } from 'react';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status when component mounts
    fetch('https://easyvest.ir/auth/status', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          setUser(data.user);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error checking auth status:', err);
        setLoading(false);
      });
  }, []);

  const handleLogin = () => {
    window.location.href = 'https://easyvest.ir/auth/google';
  };

  const handleLogout = () => {
    window.location.href = 'https://easyvest.ir/auth/logout';
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="login-container">
      {user ? (
        <div className="user-profile">
          <img src={user.picture} alt={user.displayName} className="profile-picture" />
          <h2>Welcome, {user.displayName}!</h2>
          <p>{user.email}</p>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : (
        <div className="login-box">
          <h1>Welcome to EasyVest</h1>
          <p>Please sign in to continue</p>
          <button onClick={handleLogin} className="google-button">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="google-icon"
            />
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Login; 