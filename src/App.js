import React from 'react';
import Books from './components/Books';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Books />
      </div> 
    </div>
  );
}

export default App;
