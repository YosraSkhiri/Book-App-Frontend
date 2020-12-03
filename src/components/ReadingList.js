import React, { useEffect, useState } from 'react';
import NotificationInfo from './NotificationInfo';
import axios from 'axios';

const ReadingList = () => {
    const [books, setBooks] = useState();
    const [res, setRes] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/readers/readinglist/delete', { bookId: e.target.children[0].value}, { withCredentials: true })
        .then(res => {
            setRes(res.data.msg);
        })
        .catch(err => setRes(err.response.data.msg))
    }

    useEffect(() => {
        axios.get('http://localhost:5000/readers/readinglist', { withCredentials: true })
            .then(res => {
                setBooks(res.data);
                setRes(res.data.msg);
            })
            .catch(err => setRes(err.response.data.msg))
    }, []);

    return (
        <div>
            <h1 className="rl-title">My Reading List</h1>
            {
                books ?
                    <ul className="rl__books">
                        {
                            books.map(book => (
                                <li className="rl__book" key={book._id}>
                                    <div className="rl__book-cover">
                                        <img 
                                            src={`http://localhost:5000/images/books/${book.cover}`} 
                                            alt={book.title} 
                                        />
                                    </div>
                                    <div className="rl__book-title">
                                        {book.title} 
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <input type="hidden" value={book._id} name="bookId"/>
                                        <button 
                                            type="submit"
                                            className="rl__book-btn" 
                                        > 
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#393939" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </form>
                                </li>
                            ))
                        }
                    </ul> : 'Your Reading List is Empty.'
            }

            {
                res ? <NotificationInfo res={res}/> : null
            }
        </div>
    );
}

export default ReadingList;