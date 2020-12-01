import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Author = () => {
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const urlParts = window.location.href.split('/');
        const authorName = urlParts[urlParts.length - 2];
        const authorId = urlParts[urlParts.length - 1];

        axios.get('http://localhost:5000/authors/'+authorName+'/'+authorId)
             .then(res => {
                 setAuthor(res.data);
            })
             .catch(() => {

             })
        
    }, []);

    return ( 
        author ?
        <>
        <div className="author_flex">
            <div>
                <img 
                    src={`http://localhost:5000/images/authors/${author.photo}`}
                    alt={author.name}
                    className="author_img"
                />
            </div>
            <div>
                <h1>{author.name}</h1>
                <p>{author.birthdate}</p>
            </div>
        </div>
        <h2>This author's Books</h2>
        </> : 
        <p>Loading...</p>
    );
}
 
export default Author;