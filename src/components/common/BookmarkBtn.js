import React, { useState } from 'react';
import NotificationInfo from './NotificationInfo';
import axios from 'axios';

const BookmarkBtn = (props) => {
    const [res, setRes] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookmark = {
            bookId: props.bookId,
            cover: props.cover,
            title: props.title
        }
        axios.post('http://localhost:5000/readers/bookmark', bookmark, { withCredentials: true })
            .then(res => setRes(res.data.msg))
            .catch(err => setRes(err.response.data.msg));
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className="btn btn-icon" type="submit">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M9 11L5 8.22222L1 11V2.11111C1 1.81643 1.12041 1.53381 1.33474 1.32544C1.54906 1.11706 1.83975 1 2.14286 1H7.85714C8.16025 1 8.45094 1.11706 8.66526 1.32544C8.87959 1.53381 9 1.81643 9 2.11111V11Z" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {
                res ? <NotificationInfo res={res}/> : null
            }
        </form>
    );
}

export default BookmarkBtn;