import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NotificationInfo from './NotificationInfo';
import BookPhotoPlaceholder from '../assets/images/book_photo_placeholder.png';

const AddBook = () => {
    const [newBook, setNewBook] = useState({
        cover: '',
        title: '',
        authors: [],
        summary: '',
        categories: [],
        release_date: ''
    });

    const [{ src, alt }, setPreview] = useState({
        src: BookPhotoPlaceholder,
        alt: 'Upload Book'
    });

    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);

    const [res, setRes] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/categories/')
            .then( res => setCategories(res.data))
            .catch()

        axios.get('http://localhost:5000/authors/')
            .then( res => setAuthors(res.data))
            .catch()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('cover', newBook.cover);
        formData.append('title', newBook.title);
        formData.append('authors', newBook.authors);
        formData.append('summary', newBook.summary);
        formData.append('categories', newBook.categories);

        axios.post('http://localhost:5000/books/add/', formData)
            .then(res => {
                setRes(res.data.msg);
            })
            .catch(err => {
                setRes(err.response.data.msg);
            });
    }

    const handleChange = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value 
        })
    }

    const handlePhoto = (e) => {
        setNewBook({ ...newBook, cover: e.target.files[0] });
        if(e.target.files[0]) {
            setPreview({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });
        }
    }

    const addAuthor = (e) => {
        let authorArray = Array.from(e.target.selectedOptions, option => option.value);

        setNewBook({
            ...newBook,
            authors: authorArray
        });
    }

    const addCategory = (e) => {
        let categoryArray = Array.from(e.target.selectedOptions, option => option.value);

        setNewBook({
            ...newBook,
            categories: categoryArray
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="book-main">
                <div className="book-main__img">
                    <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        className="visually-hidden"
                        id="bookCover"
                        onChange={handlePhoto}
                    />
                    <label htmlFor="bookCover" className="add-book-photo">
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
                            name="title"
                            onChange={handleChange}
                            value={newBook.title}
                        />
                        <button className="btn btn-secondary" type="submit">Add the book</button>
                    </div>

                    <div className="book-card__authors">
                        <label htmlFor="release_date">Release date:</label>
                        <input
                            type="date"
                            name="release_date"
                            id="release_date"
                            className="input-txt input-date"
                            value={newBook.release_date}
                            onChange={handleChange}
                        />
                        <label htmlFor="authors">Choose The Authors: (crl + right click)</label>
                        <select name="authors" id="authors" multiple onChange={addAuthor} className="input-txt select-mult">
                            {
                                authors.map(author => (
                                    <option 
                                        value={author._id}
                                        key={author._id}
                                    >
                                        {author.name}
                                    </option>
                                ))
                            }
                            
                        </select>
                    </div>

                    <textarea
                        className="input-txt input-txt--description"
                        placeholder="Summary..."
                        name="summary"
                        onChange={handleChange}
                        value={newBook.summary}
                    />

                    <label htmlFor="categories">Choose The categories: (crl + right click)</label>
                    <select name="categories" id="categories" multiple onChange={addCategory} className="input-txt select-mult">
                        {
                            categories.map(category => (
                                <option 
                                    value={category._id}
                                    key={category._id}
                                >
                                    {category.category}
                                </option>
                            ))
                        }
                        
                    </select>
                    
                </div>
            </div>
        </form>
        {
            res ? <NotificationInfo res={res}/> : null
        }
        </>
    );
}

export default AddBook;