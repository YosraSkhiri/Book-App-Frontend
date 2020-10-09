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
        books.map(book => (
            <BookCard title={book.title} key={book._id}/>
        ))
    );
}

export default Books;