import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const isAuthenticated = token && user;

  return (
    <div>
      <h1>Beach Cleanup Platform - Volunteer Panel</h1>
      
      {!isAuthenticated ? (
        <div>
          <p>Welcome to the Beach Cleanup Platform Volunteer Portal. Please login or signup to access the features.</p>
          
          <div style={{ marginTop: '30px' }}>
            <h3>Get Started</h3>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              <Link to="/login">
                <button style={{
                  padding: '12px 24px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Login
                </button>
              </Link>
              
              <Link to="/signup">
                <button style={{
                  padding: '12px 24px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Welcome back! Use the navigation to access volunteer features.</p>
        </div>
      )}
      
    </div>
  );
};

export default Home;
