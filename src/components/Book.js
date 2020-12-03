import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookmarkBtn from './BookmarkBtn';
import Comments from './Comments';
import RatingDisplay from './RatingDisplay';
import { Link } from 'react-router-dom';

const Book = () => {
    const [fetchedBook, setFetchedBook] = useState();
    const [authors, setAuthors] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        const urlParts = window.location.href.split('/');
        const bookName = urlParts[urlParts.length - 2];
        const bookId = urlParts[urlParts.length - 1];

        axios.get('http://localhost:5000/books/'+bookName+'/'+bookId)
             .then(res => {
                 setFetchedBook(res.data);

                 const authorIds = res.data.author_ids;
                 const typeIds = res.data.type_ids;

                 axios.get('http://localhost:5000/authors/', {
                     params: {
                         authorIds
                     }
                 })
                 .then(res => setAuthors(res.data))
                 .catch()

                 axios.get('http://localhost:5000/categories/', {
                    params: {
                        typeIds
                    }
                })
                .then(res => setCategories(res.data))
                .catch()
                 
                 
            })
             .catch((err) => {
                console.log(err)
             }); 
    }, []);

    return (
        <div>
            <div className="book-main">
                <div className="book-main__img">
                    {
                        fetchedBook ?
                        <img 
                            src={`http://localhost:5000/images/books/${fetchedBook.cover}`} 
                            alt="Cover" 
                        /> : 'Loading...'
                    }
                    
                </div>
                <div className="book-main__content">
                    <div className="book-main__fst-row">
                        <div>
                            <div className="book-main__rating">
                                <RatingDisplay bookId={fetchedBook ? fetchedBook._id : ''}/>
                            </div>
                            <h1 className="book-main__title">{fetchedBook ? fetchedBook.title : 'Loading...'}</h1>
                        </div>
                        <div className="btn-group">
                            <BookmarkBtn 
                                bookId={fetchedBook ? fetchedBook._id : ''}
                                title={fetchedBook ? fetchedBook.title : ''}
                                cover={fetchedBook ? fetchedBook.cover : ''}
                            />
                            <button className="btn btn-primary">Publish a review</button>
                        </div>

                    </div>
                    <ul className="book-card__authors">
                        {
                            authors ?
                            authors.map(author => (
                                <li 
                                    className="book-card__author" 
                                    key={author._id}>

                                    <Link to={`/authors/${author.name}/${author._id}`} >
                                        {author.name}
                                    </Link>
                                </li>
                            )) : 'Loading...'
                        }
                    </ul>
                    <p className="book-main__description">
                        {fetchedBook ? fetchedBook.summary : 'Loading...'}
                    </p>
                    <ul className="book-main__types">
                        {
                            categories ? 
                            categories.map(category => (
                            <li className="book-main__type" key={category._id}>
                                <Link to={`/library?category=${category.category}`}>
                                    {category.category}
                                </Link>
                            </li>
                            )) : 'Loading...'
                        }
                    </ul>
                </div>
            </div>
            <Comments bookId={fetchedBook ? fetchedBook._id : ''}/>
        </div>
    );
}

export default Book