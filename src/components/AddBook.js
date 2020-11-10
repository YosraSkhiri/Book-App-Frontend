import React, { useRef, useState } from 'react';
import AutocompleteInput from './AutocompleteAuthor';

const AddBook = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="book-main">
                <label className="book-main__img">
                    <input type="file" />
                </label>
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
                        <AutocompleteInput acType="author"/>
                    </div>

                    <textarea
                        className="input-txt input-txt--description"
                        placeholder="Summary..."
                    />
                    <AutocompleteInput acType="bookType"/>
                </div>
            </div>
        </form>
    );
}

export default AddBook;