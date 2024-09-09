// components/Loading.js
import React from 'react';

const Loading = () => {
  const spinnerStyle = {
    width: '40px',
    height: '40px',
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
    borderTopColor: '#333',
    animation: 'spin 1s ease-in-out infinite',
  };

    const containerStyle = {
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
      <p style={{fontWeight:'550'}}>Loading...</p>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
