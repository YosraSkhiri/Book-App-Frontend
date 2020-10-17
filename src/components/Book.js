import React from 'react';
import RatingStars from './RatingStars';
import bookCover from '../assets/images/coverbook.jpg';
import BookmarkBtn from './BookmarkBtn';

const Book = () => {
    return (
        <div>
            <div className="book-main">
                <div className="book-main__img">
                    <img src={bookCover} alt="Cover of" />
                </div>
                <div className="book-main__content">
                    <div className="book-main__fst-row">
                        <div>
                            <div className="book-main__rating">
                                <RatingStars />
                            </div>
                            <h1 className="book-main__title">Factfulness</h1>
                        </div>
                        <div className="btn-group">
                            <BookmarkBtn />
                            <button className="btn btn-primary">Publish a review</button>
                        </div>

                    </div>
                    <ul className="book-card__authors">
                        <li className="book-card__author">Hans Rosling</li>
                        <li className="book-card__author">Ola Rosling</li>
                        <li className="book-card__author">Anna Rosling Rönnlund</li>
                    </ul>
                    <p className="book-main__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Book