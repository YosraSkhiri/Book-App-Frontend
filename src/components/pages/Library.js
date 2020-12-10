import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Books from '../layout/Books';
import NotificationInfo from '../common/NotificationInfo';
import { Link } from 'react-router-dom';

const Library = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [res, setRes] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/categories/')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                setRes(err.response.data.msg);
            })
    }, []);

    return (
        <div className="library-container">
            <div>
                <div className="filter-categories-title">Filter by category:</div>
                <ul className="filter-categories">
                    {
                        categories.map( category => (
                            <li 
                                key={category.category}
                                className="filter-category"
                            > 
                                <Link 
                                    to={"/library?category="+category.category}
                                    onClick={() => setCategory(category._id)}
                                >
                                    {category.category}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div> 
            <Books category={category}/>   
            {
                res ? <NotificationInfo res={res}/> : null
            }      
        </div>
    );
}
 
export default Library;