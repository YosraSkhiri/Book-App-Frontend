import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Book from './components/Book';
import Books from './components/Books';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/books">
              <Books />
            </Route>
            <Route path={`/book/:bookTitle/:bookId`}>
              <Book />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
