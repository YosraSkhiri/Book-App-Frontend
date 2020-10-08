import React from 'react';
import bookCover from '../assets/images/coverbook.jpg';
import RatingStars from './RatingStars';

const BookCard = () => {
    return (
        <div className="book-card__wrapper">
            <div className="book-card__cover-img">
                <img src={bookCover} alt="Cover image of" />
            </div>
            <div className="book-card__content">
                <div className="book-card__title">Factfulness</div>

                <ul className="book-card__authors">
                    <li className="book-card__author">Hans Rosling</li>
                    <li className="book-card__author">Ola Rosling</li>
                    <li className="book-card__author">Anna Rosling Rönnlund</li>
                </ul>

                <div className="book-card__engagement">
                    <span className="book-card__rating">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" className="svg-inline-icon">
                            <path d="M9 1L11.472 6.008L17 6.816L13 10.712L13.944 16.216L9 13.616L4.056 16.216L5 10.712L1 6.816L6.528 6.008L9 1Z" stroke="#393939" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="book-card__rating-avg">4.1</span>
                        <span className="book-card__rating-nbr">10k reviews</span>
                    </span>

                    <span className="book-card__comments">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="svg-inline-icon">
                            <path d="M15 10.3333C15 10.7459 14.8361 11.1416 14.5444 11.4333C14.2527 11.725 13.857 11.8889 13.4444 11.8889H4.11111L1 15V2.55556C1 2.143 1.16389 1.74733 1.45561 1.45561C1.74733 1.16389 2.143 1 2.55556 1H13.4444C13.857 1 14.2527 1.16389 14.5444 1.45561C14.8361 1.74733 15 2.143 15 2.55556V10.3333Z" stroke="#393939" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="book-card__comments-nbr">14</span>
                    </span>
                </div>
            </div>
            <div className="book-card__btn-group">
                <button className="btn btn-icon">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <path d="M9 11L5 8.22222L1 11V2.11111C1 1.81643 1.12041 1.53381 1.33474 1.32544C1.54906 1.11706 1.83975 1 2.14286 1H7.85714C8.16025 1 8.45094 1.11706 8.66526 1.32544C8.87959 1.53381 9 1.81643 9 2.11111V11Z" stroke="#393939" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button className="btn btn-with-icon">
                    <span>Read more</span>
                    <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
                        <path d="M1 7.75L4 4.375L1 1" stroke="#393939" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default BookCard;