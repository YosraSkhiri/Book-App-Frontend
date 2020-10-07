import React from 'react';
import bookCover from '../assets/images/coverbook.jpg';
import RatingStars from './RatingStars';

const BookCard = () => {
    return (
        <div className="book-card__wrapper">
            <div className="book-card__cover-img">
                <img src={bookCover} alt="Cover image of" />
            </div>
            <div className="book-card__txt">
                <div className="book-card__authors">
                    <ul>
                        <li className="book-card__author">Hans Rosling</li>
                        <li className="book-card__author">Ola Rosling</li>
                        <li className="book-card__author">Anna Rosling Rönnlund</li>
                    </ul>
                </div>
                <div className="book-card__row">
                    <div className="book-card__title">Factfulness</div>
                    <div className="book-card__rating">
                        <svg width="18px" viewBox="0 0 16.79 16.08">
                            <title>star</title>
                            <path
                                fill="#0ec3f9"
                                d="M.38,7.21l3,2.59a1.09,1.09,0,0,1,.35,1.07l-.93,3.88a1.08,1.08,0,0,0,1.6,1.17l3.41-2.09a1.07,1.07,0,0,1,1.12,0l3.41,2.09A1.08,1.08,0,0,0,14,14.75L13,10.87a1.08,1.08,0,0,1,.34-1.07l3-2.59a1.07,1.07,0,0,0-.61-1.88l-4-.32a1.06,1.06,0,0,1-.9-.66L9.39.66a1.07,1.07,0,0,0-2,0L5.87,4.35A1.06,1.06,0,0,1,5,5L1,5.33A1.07,1.07,0,0,0,.38,7.21Z"
                            />
                        </svg>

                        <div className="rating__nbr"><span>4</span>/5</div>
                    </div>
                </div>
                <p className="book-card__desc">
                    The international bestseller, inspiring and revelatory,
                    filled with lively anecdotes and moving stories, Factfulness
                    is an...
                    <a>Read More</a>
                </p>
            </div>
        </div>
    );
}

export default BookCard;