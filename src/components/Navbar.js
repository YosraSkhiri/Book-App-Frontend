import React from 'react';
import Logo from './Logo';
import SearchInput from './SearchInput';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Logo />
                <SearchInput />
                <ul className="navbar__links">
                    <li>

                    </li>
                    <li>Library</li>
                    <li>Log in</li>
                    <li className="btn btn-primary">Sign up</li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;