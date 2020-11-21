import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddAuthor from './components/AddAuthor';
import AddBook from './components/AddBook';
import Author from './components/Author';
import Book from './components/Book';
import Books from './components/Books';
import CategoriesCreate from './components/CategoriesCreate';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/books" exact>
              <Books />
            </Route>
            <Route path={`/books/:bookTitle/:bookId`} exact>
              <Book />
            </Route>
            <Route path="/books/add" exact>
              <AddBook />
            </Route>
            <Route path="/authors/add" exact>
              <AddAuthor />
            </Route>
            <Route path="/categories/add" exact>
              <CategoriesCreate />
            </Route>
            <Route path="/authors/:authorName/:authorId" exact>
              <Author />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
