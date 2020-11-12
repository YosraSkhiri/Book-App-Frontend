import React, { useState } from 'react';
import axios from 'axios';

const AddAuthor = () => {
    const [newAuthor, setNewAuthor] = useState(
        {
            name: "",
            birthdate: ""
        }
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/authors/add/', newAuthor)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             }) 
        console.log(newAuthor)
    }

    const handleChange = (e) => {
        setNewAuthor({...newAuthor, [e.target.name]: e.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
            />

            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newAuthor.name}
                onChange={handleChange}
            />

            <input 
                type="date"
                name="birthdate"
                value={newAuthor.date}
                onChange={handleChange}
            />

            <input 
                type="submit"
            />
        </form>
    );
}

export default AddAuthor;