import React from 'react';
import BookCard from './components/BookCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div classname="container">
        <BookCard />
      </div> 
    </div>
  );
}

export default App;
