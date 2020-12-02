import React from 'react';

const Comments = () => {
    return (
        <div className="comments">
            <div className="comments__title">Comments (25)</div>
            <form className="comment__form">
                <input 
                    type="text"
                    placeholder="Write a comment..."
                    className="input-txt input-txt--ac"
                />
                <button
                    type="submit"
                    className="btn btn-secondary"
                >
                    Comment
                </button>
            </form>
            <div className="comments__container">
                <div className="comment">
                    <img />
                    <div className="comment__content">
                        <div className="comment__owner"></div>
                        <div className="comment__date"></div>
                        <div className="comment__txt"></div>
                    </div>
                </div>
                <div className="comment__reply">
                    <img />
                    <div className="comment__content">
                        <div className="comment__owner"></div>
                        <div className="comment__date"></div>
                        <div className="comment__txt"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Comments;