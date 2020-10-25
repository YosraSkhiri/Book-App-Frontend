import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SearchInput from './SearchInput';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/">
                    <Logo />
                </Link>
                <SearchInput />
                <div>
                    <ul className="navbar__icons">
                        <li>
                            <button className="navbar__search-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#393939" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="navbar__search-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#393939" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </li>
                    </ul>
                    <ul className="navbar__links">
                        <li>
                            {/*<button className="navbar__search-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#393939" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>*/}
                        </li>
                        <li>Library</li>
                        <li>Log in</li>
                        <li className="btn btn-primary">Sign up</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;