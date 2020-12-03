import React, { useState } from 'react';
import NotificationInfo from './NotificationInfo';
import axios from 'axios';


const RatingStars = ({rating, bookId}) => {
    const [inputRating, setInputRating] = useState({
        value: '',
        bookId: ''
    });
    const [input, setInput] = useState(rating);
    const [res, setRes] = useState();
    const grades = ["Poor", "Fair", "Good", "Very good", "Excellent"];
    const activeColor = "#02C4FF";
    const inactiveColor = "#CCCCCC";

    const handleClick = (e) => {
        const nbStar = e.target.id.slice(-1);
        console.log(+nbStar)
        setInput(+nbStar);
        setInputRating({
            bookId: bookId,
            value: +nbStar
        });
        axios.post('http://localhost:5000/readers/rating',{
            bookId: bookId,
            value: +nbStar
        }, { withCredentials: true })
        .then(res => {
            setRes(res.data.msg);
        })
        .catch(err => {
            setRes(err.response.data.msg);
        });

    }

    return (
        <>
            {
                bookId ?
                grades.map((grade, index) => (
                    <div className="rating-star" key={`star_${index + 1}_key`}>
                        <label htmlFor={`star${index + 1}`} className="rating-star__label">
                            Rate it {index + 1} {index + 1 > 1 ? "stars": "star"}
                        </label>
                        <input
                            type="radio"
                            name="book_rating"
                            id={`star${index + 1}`}
                            value={index + 1}
                            onChange={e => {}}
                            checked={Math.round(input) === index + 1 ? true : false}
                        />
                        <svg viewBox="0 0 16.79 16.08">
                            <title>{grade}</title>
                            <path
                                id={`star_${index + 1}`}
                                onClick={handleClick}
                                style={{ fill: Math.round(input) >= index + 1 ? activeColor : inactiveColor }}
                                d="M.38,7.21l3,2.59a1.09,1.09,0,0,1,.35,1.07l-.93,3.88a1.08,1.08,0,0,0,1.6,1.17l3.41-2.09a1.07,1.07,0,0,1,1.12,0l3.41,2.09A1.08,1.08,0,0,0,14,14.75L13,10.87a1.08,1.08,0,0,1,.34-1.07l3-2.59a1.07,1.07,0,0,0-.61-1.88l-4-.32a1.06,1.06,0,0,1-.9-.66L9.39.66a1.07,1.07,0,0,0-2,0L5.87,4.35A1.06,1.06,0,0,1,5,5L1,5.33A1.07,1.07,0,0,0,.38,7.21Z"
                            />
                        </svg>
                    </div> 
                )) : 'Loading...'
            }
            {
                res ? <NotificationInfo res={res}/> : null
            }
        </>
    );
};

export default RatingStars;
