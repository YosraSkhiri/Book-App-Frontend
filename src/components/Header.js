import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {
    const isLogged = useState(Cookies.get('isLogged'));

    return (
        <header className="header_container">
            <div className="header_content">
                <h1 className="header_title">Welcome to BookWave!</h1>
                <p className="header_txt">
                    If you're in love with book, this is the right place for you, 
                    we have a friendly community that reviews and discuss books, 
                    find the books you enjoy and share your thoughts.
                </p>
                {
                    !isLogged[0] ?
                    <button className="btn btn-primary btn-bg">
                        <Link to="/signup">
                            Signup
                        </Link> 
                    </button> : null
                }
            </div>
        </header>
    );
}
 
export default Header;