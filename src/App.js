import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddAuthor from './components/pages/AddAuthor';
import AddBook from './components/pages/AddBook';
import Author from './components/pages/Author';
import Book from './components/pages/Book';
import CategoriesCreate from './components/pages/CategoriesCreate';
import Footer from './components/common/Footer';
import Header from './components/Header';
import Library from './components/pages/Library';
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
import ReadingList from './components/ReadingList';
import Signup from './components/auth/Signup';

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
