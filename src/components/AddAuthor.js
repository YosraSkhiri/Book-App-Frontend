import React, { useState } from 'react';
import axios from 'axios';
import placeholder from '../assets/images/placeholder.png'

const AddAuthor = () => {
    const [newAuthor, setNewAuthor] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );

    const [{src, alt}, setPreview] = useState({
        src: placeholder,
        alt: 'Default'
    });

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
        if(e.target.files[0]) {
            setPreview({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' className="author__form">
            <div className="flex">
                <div className="flex__1">
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        id="photo"
                        className="visually-hidden"
                        onChange={handlePhoto}
                    />
                    <label htmlFor="photo" className="add-pic">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#459db7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/>
                            <circle cx="12" cy="10" r="3"/>
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                    </label>
                    <img className="preview-pic" src={src} alt={alt}/>
                </div>
                <div className="inputs">
                    <input 
                        type="text"
                        placeholder="name"
                        name="name"
                        className="input-txt input-txt--title"
                        value={newAuthor.name}
                        onChange={handleChange}
                    />

                    <input 
                        type="date"
                        name="birthdate"
                        className="input-txt"
                        value={newAuthor.date}
                        onChange={handleChange}
                    />
                    <input 
                        type="submit"
                        value="Add Author"
                        className="btn btn-primary submit"
                    />
                </div>
            </div>
            
        </form>
    );
}

export default AddAuthor;