import React, { useState } from 'react';
import axios from 'axios';

const AddAuthor = () => {
    const [newAuthor, setNewAuthor] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newAuthor.photo);
        formData.append('birthdate', newAuthor.birthdate);
        formData.append('name', newAuthor.name);
        
        axios.post('http://localhost:5000/authors/add/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewAuthor({...newAuthor, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewAuthor({...newAuthor, photo: e.target.files[0]});
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
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