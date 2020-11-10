import React, { useEffect, useState } from 'react';
import author from '../assets/images/author.jpg';

const AutocompleteInput = (props) => {
    const [tags, setTags] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handleChange = () => {

    }

    return (
        <div className="ac__wrapper">
            <div className="ac__choices">
                {
                    props.acType === "author" ?
                        tags !== null ?
                            <div className="ac__choices-tag-wrapper">
                                <div className="ac__choices-author-tag">
                                    <img
                                        src={author}
                                        className="author-tag__img"
                                    />
                                    <p>
                                        Joanne Rowling
                                    </p>
                                    <button aria-label="Delete Author">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#393939" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        : null
                    : null
                }

                {
                    props.acType === "bookType" ?
                        tags !== null ?
                            <div className="ac__choices-tag-wrapper">
                                <div className="ac__choices-type-tag">
                                    <p>Horror</p>
                                    <button aria-label="Delete Book Type">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#393939" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        : null
                    : null
                }

            </div>
            <div className="ac__input-wrapper">
                <input
                    className="input-txt input-txt--ac"
                    placeholder={props.acType === "author" ? "Author(s)" : "Book Type(s)"}
                    autoComplete="off"
                    onChange={handleChange}
                />
                {
                    inputValue !== "" ?
                        <div className="ac__input-container">

                            <div className="ac-author">
                                <img
                                    src={author}
                                    className="author-tag__img"
                                />
                                <p>
                                    Joanne Rowling
                                </p>
                            </div>

                            <div className="ac-type">
                                Horror
                            </div>

                        </div>
                    : null
                }

            </div>
        </div>
    );
}

export default AutocompleteInput;