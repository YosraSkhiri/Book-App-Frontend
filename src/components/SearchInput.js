import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
const SearchInput = () => {
    const [books, setBooks] = useState();
    const [authors, setAuthors] = useState();
    const [inputValue, setInputValue] = useState("");
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        if(inputValue != null) {
            axios.get('http://localhost:5000/books/search', {
                params: {
                  book: inputValue
                }
            })
                .then(res => setBooks(res.data))
                .catch(err => console.log(err));
        
        
            axios.get('http://localhost:5000/authors/search', {
                params: {
                    author: inputValue
                }
            })
                .then(res => setAuthors(res.data))
                .catch(err => console.log(err));
        }

    }, [inputValue]);

    return (
        <div className="navbar__search">
            <div className="search-input__wrapper">
                <label htmlFor="search" className="search-input__label">Search a Book or an Author:</label>
                <input
                    type="text"
                    id="search"
                    className="search-input__input"
                    placeholder="Search for a book or an author"
                    autoComplete="off"
                    onChange={handleChange}
                    /*onFocus={() => setShow(true)}
                    onBlur={() => setShow(false)}*/
                />
                <button type="submit" className="search-input__btn">

                </button>
            </div>

            {
                (inputValue !== "") ?

                    <div className="suggestions__wrapper" style={{}}>
                        {
                            books ?
                                <div className="suggestion__books">
                                    {
                                        books.map( book => (
                                            <Link to={`/books/${book.title}/${book._id}`}>
                                                <div className="suggestion__book" key={book._id}>
                                                    <img 
                                                        src={"http://localhost:5000/images/books/"+book.cover} 
                                                        alt={book.title}
                                                        className="suggestion__book-img" 
                                                    />
                                                    <div>
                                                        <div className="suggestion__book-title">{book.title}</div>
                                                        <ul>
                                                            <li className="suggestion__book-author">Hans Rosling</li>
                                                            <li className="suggestion__book-author">Ola Rosling</li>
                                                            <li className="suggestion__book-author">Anna Rosling Rönnlund</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div> : null
                        }

                        {
                            authors ?
                                <div className="suggestion__authors">
                                    {
                                        authors.map(author => (
                                            <Link to={`/authors/${author.name}/${author._id}`} key={author._id}>
                                                <div className="suggestion__author">
                                                    <div
                                                        className="suggestion__author-img"
                                                        style={{ backgroundImage: `URL(http://localhost:5000/images/authors/${author.photo})` }}
                                                    />
                                                    <div className="suggestion__author-name">{author.name}</div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div> : null
                        }

                    </div> : null
            }
        </div>
    );
}

export default SearchInput;