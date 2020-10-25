import React from 'react';
import book from '../assets/images/coverbook.jpg';
import author from '../assets/images/author.jpg';
const SearchInput = () => {
    return (
        <div className="navbar__search">
            <div className="search-input__wrapper">
                <label htmlFor="search" className="search-input__label">Search a Book or an Author:</label>
                <input
                    type="text"
                    id="search"
                    className="search-input__input"
                    placeholder="Search for a book or an author"
                    autocomplete="off"
                />
                <button type="submit" className="search-input__btn">

                </button>
            </div>
            <div className="suggestions__wrapper">
            <div className="suggestion__books">
                <div className="suggestion__book">
                    <img src={book} className="suggestion__book-img" />
                    <div>
                        <div className="suggestion__book-title">Factfulness</div>
                        <ul>
                            <li className="suggestion__book-author">Hans Rosling</li>
                            <li className="suggestion__book-author">Ola Rosling</li>
                            <li className="suggestion__book-author">Anna Rosling Rönnlund</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="suggestion__authors">
                    <div className="suggestion__author">
                        <div
                            className="suggestion__author-img"
                            style={{ backgroundImage: `URL(${author})` }}
                        />
                        <div className="suggestion__author-name">Joanne Rowling</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchInput;