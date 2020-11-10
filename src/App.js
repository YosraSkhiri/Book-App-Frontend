import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddBook from './components/AddBook';
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
            <Route path="/add">
              <AddBook />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
