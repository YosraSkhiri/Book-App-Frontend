import React, { useEffect, useState } from 'react';
import BookCard from '../common/BookCard';
import axios from 'axios';

const Books = (props) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if(props.category) {
            axios.get('http://localhost:5000/books/', {
                params: {
                    category: props.category
                }
            })
            .then(res => {
                setBooks(res.data);
            });

        } else {

            axios.get('http://localhost:5000/books/')
            .then(res => {
                setBooks(res.data);
            });
        }

    }, [props.category]);

    return (
        <div className="books-result">
            {
                books.map(book => (
                    <BookCard book={book} key={book._id}/>
                ))
            }
        </div>
    );
}

export default Books;