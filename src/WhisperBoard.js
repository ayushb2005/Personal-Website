import React from 'react';

const WhisperBoard = () => {
  React.useEffect(() => {
    // Redirect to the actual WhisperBoard app while keeping the URL clean
    window.location.replace('https://whisperboard-3ypcpzvqp-ayushb2005s-projects.vercel.app');
  }, []);

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Redirecting to WhisperBoard...</h2>
        <p>If you're not redirected automatically, <a href="https://whisperboard-3ypcpzvqp-ayushb2005s-projects.vercel.app">click here</a>.</p>
      </div>
    </div>
  );
};

export default WhisperBoard;
