// src/App.jsx
import React from 'react';
import Counter from './components/Counter';  // Import the Counter component

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Add a heading to the app */}
      <h1>Simple Counter Application</h1>
      
      {/* Render the Counter component */}
      <Counter />
    </div>
  );
}

export default App;
