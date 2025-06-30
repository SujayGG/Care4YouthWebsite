import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Care4Youth Website</h1>
      <p>This is your new React website. Start building your UI here.</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
}

export default App;