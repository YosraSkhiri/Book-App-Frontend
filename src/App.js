import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Books from './components/Books';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Router>
          <Switch>
            <Route path="/books">
              <Books />
            </Route>
            <Route path={`/book/:bookTitle/:bookId`}>
              <p>hi</p>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
