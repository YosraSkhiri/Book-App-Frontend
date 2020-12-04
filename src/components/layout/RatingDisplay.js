import React from 'react';
import RatingStars from '../RatingStars';

const RatingDisplay = ({bookId}) => {
    return (
        <div className="rating-stars__wrapper">
            <RatingStars rating={3.5} bookId={bookId}/>
            <span className="rating-stars__stats">
                <span className="rating-stars__avg">4.8</span> 
                <span className="rating-stars__reviews-nbr">10k reviews</span>
            </span>
        </div>
    );
}
 
export default RatingDisplay;