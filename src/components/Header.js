import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header_container">
            <div className="header_content">
                <h1 className="header_title">Welcome to BookWave!</h1>
                <p className="header_txt">
                    If you're in love with book, this is the right place for you, 
                    we have a friendly community that reviews and discuss books, 
                    find the books you enjoy and share your thoughts.
                </p>
                <button className="btn btn-primary">
                    <Link to="/signup">
                        Signup
                    </Link> 
                </button>
            </div>
        </header>
    );
}
 
export default Header;