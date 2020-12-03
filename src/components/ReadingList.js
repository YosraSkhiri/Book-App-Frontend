import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReadingList = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/readers/readinglist', { withCredentials: true })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    },[]);
    
    return (
        <div>
            <div>My Reading List</div>
            <ul>
                <li>
                    <div>
                        <img />
                    </div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
 
export default ReadingList;