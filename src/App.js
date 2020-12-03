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
import CategoriesCreate from './components/CategoriesCreate';
import Footer from './components/Footer';
import Header from './components/Header';
import Library from './components/Library';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ReadingList from './components/ReadingList';
import Signup from './components/Signup';

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Header />
              <Footer />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/readinglist" exact>
              <ReadingList />
            </Route>
            <Route path="/library" exact>
              <Library />
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
            <Route path="/authors/:name/:id" exact>
              <Author />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
