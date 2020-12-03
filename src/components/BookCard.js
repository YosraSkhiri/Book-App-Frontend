import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookmarkBtn from './BookmarkBtn';

const BookCard = (props) => {

    const [authors , setAuthors] = useState();
    useEffect(() => {
        axios.get('http://localhost:5000/authors/', {
            params: {
                authorIds: props.book.author_ids
            }
        })
        .then(res => setAuthors(res.data))
        .catch()
    }, [props.book.author_ids]);

    return (
        <div className="book-card__wrapper">
            <div className="book-card__cover-img">
                <Link to={`/books/${props.book.title}/${props.book._id}`}>
                    {
                        props.book.cover ? 
                        <img 
                            src={`http://localhost:5000/images/books/${props.book.cover}`} 
                            alt="Cover" 
                        /> : 'Loading...'
                    }
                    
                </Link>
            </div>
            <div className="book-card__content">
                <Link to={`/books/${props.book.title}/${props.book._id}`}>
                    <div className="book-card__title">{props.book.title}</div>
                </Link>

                <ul className="book-card__authors">
                    {
                        authors ?
                        authors.map(author => (
                            <li className="book-card__author" key={author._id}>{ author.name }</li>
                        )) : 'Loading...'
                    }
                </ul>
            </div>
            <div className="btn-group">
                <BookmarkBtn 
                    bookId={props.book._id}
                    title={props.book.title}
                    cover={props.book.cover}
                />
                <button className="btn btn-with-icon btn-primary">
                    <span>Read more</span>
                    <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
                        <path d="M1 7.75L4 4.375L1 1" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default BookCard;