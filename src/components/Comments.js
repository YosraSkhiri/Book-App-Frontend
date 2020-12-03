import React, { useState, useEffect } from 'react';
import NotificationInfo from './NotificationInfo';
import Cookies from 'js-cookie';
import axios from 'axios';

const Comments = (props) => {
    const isLogged = useState(Cookies.get('isLogged'));
    const [res, setRes] = useState();

    const [comment, setComment] = useState({
        bookId: '',
        comment: ''
    });

    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/readers/comment', comment, { withCredentials: true })
            .then(res => {
                setRes(res.data.msg);
                axios.get('http://localhost:5000/books/comments', {
                    params: {
                        id: props.bookId
                    }
                })
                    .then(res => setComments(res.data))
                    .catch(err => console.log(err));
            })
            .catch(err => {
                setRes(err.response.data.msg);
            });
    }

    useEffect(() => {
        setComment({ ...comment, bookId: props.bookId });

        axios.get('http://localhost:5000/books/comments', {
            params: {
                id: props.bookId
            }
        })
            .then(res => setComments(res.data))
            .catch(err => console.log(err));

    }, [props.bookId])

    const handleChange = (e) => {
        setComment({ ...comment, comment: e.target.value })
    }

    return (
        <div className="comments">
            <div className="comments__title">Comments ({comments.length})</div>
            {
                isLogged[0] ?
                    <form className="comment__form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            className="input-txt input-txt--ac"
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-secondary"
                        >
                            Comment
                        </button>
                    </form> : null
            }

            <div className="comments__container">
                {
                    comments.map(comment => (
                        <div className="comment" key={comment._id}>
                            <div className="comment__owner">{`${comment.first_name} ${comment.last_name}`}</div>
                            <div className="comment__date">{comment.date.substring(0, 10)}</div>
                            <div className="comment__txt">{comment.comment}</div>
                        </div>
                    ))
                }
            </div>
            {
                res ? <NotificationInfo res={res}/> : null
            }
        </div>
    );
}

export default Comments;