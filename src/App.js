import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

function App() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff'];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
