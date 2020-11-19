import React, { useState } from 'react';
import AutocompleteInput from './AutocompleteAuthor';
import BookPhotoPlaceholder from '../assets/images/book_photo_placeholder.png';

const AddBook = () => {
    const [{ src, alt }, setPreview] = useState({
        src: BookPhotoPlaceholder,
        alt: 'Upload Book'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handlePhoto = (e) => {
        if(e.target.files[0]) {
            setPreview({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="book-main">
                <div className="book-main__img">
                    <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        className="visually-hidden"
                        id="bookPhoto"
                        onChange={handlePhoto}
                    />
                    <label htmlFor="bookPhoto" className="add-book-photo">
                        <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="#EEEEEE" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </label>
                    <img src={src} alt={alt} className="add-book-photo-prv" />
                </div>
                <div className="book-main__content">
                    <div className="book-main__fst-row">
                        <input
                            type="text"
                            placeholder="Title"
                            className="input-txt input-txt--title"
                        />
                        <button className="btn btn-primary" type="submit">Add the book</button>
                    </div>

                    <div className="book-card__authors">
                        <AutocompleteInput acType="author" />
                    </div>

                    <textarea
                        className="input-txt input-txt--description"
                        placeholder="Summary..."
                    />
                    <AutocompleteInput acType="bookType" />
                </div>
            </div>
        </form>
    );
}

export default AddBook;