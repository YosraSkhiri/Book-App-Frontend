import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import axios from 'axios';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/books/')
            .then(res => {
                setBooks(res.data);
            });
        
    });

    return (
        <div className="books-result">
        {
            books.map(book => (
            <BookCard title={book.title} key={book._id}/>
            ))
        }
        </div>
    );
}

export default Books;