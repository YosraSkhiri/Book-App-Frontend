import React, { useState } from 'react';
import axios from 'axios';

const CategoriesCreate = () => {
    const [categoryVal, setCategoryVal] = useState('');
    const [msg, setMsg] = useState('');

    const handleChange = (e) => {
        setCategoryVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/categories/add/', { 'category': categoryVal })
            .then(res => {
                setMsg(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="category" className="category__label">
                    Add a new book category
            </label>
                <input
                    type="text"
                    value={categoryVal}
                    onChange={handleChange}
                    id="category"
                    className="category__input input-txt"
                    placeholder="Horror..."
                    autoComplete="off"
                />
                <input
                    value="Add Category"
                    type="submit"
                    className="btn btn-primary"
                />
            </form>
            {
                msg ? <div className="msg">{msg}</div> : null
            }
        </div>
    );
}

export default CategoriesCreate;