import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Logo from './common/Logo';
import SearchInput from './SearchInput';

const Navbar = () => {

    const [menuClass, SetMenuClass] = useState('navbar__links');
    const [show, setShow] = useState(false);
    const isLogged = useState(Cookies.get('isLogged'));
    const [readerName, setReaderName] = useState();

    const handleCLick = () => {
        if(menuClass === 'navbar__links') {
            SetMenuClass('navbar__links navbar__links--hide');
        } else {
            SetMenuClass('navbar__links');
        }   
    }

    const showMenu = () => {
        setShow(!show);
    }

    const logout = () => {
        if(isLogged[0]) {
            axios.get('http://localhost:5000/readers/logout', { withCredentials: true })
                .then(res => {
                    window.location.href='http://localhost:3000/';    
                })
                .catch(err => console.log(err));
        }
    }

    useEffect(() => {
        if(isLogged[0]) {
            axios.get('http://localhost:5000/readers/', { withCredentials: true })
                .then(res => setReaderName(res.data))
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/">
                    <Logo width="160"/>
                </Link>
                <SearchInput />
                <div>
                    <ul className="navbar__icons">
                        <li>
                            <button className="navbar__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#393939" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </li>
                        <li onClick={ handleCLick } id="menuIcon">
                            <button className="navbar__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#393939" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </li>
                    </ul>
                    <ul className={ menuClass }>
                        <li className="navbar__link"><Link to="/library">Library</Link></li>
                        {
                            isLogged[0] ?
                             <li>
                                 <div className="user_nav">
                                     <img 
                                        className="avatar"
                                        onClick={showMenu}
                                        src={'http://localhost:5000/images/readers/user_avatar.jpg'}
                                        alt={readerName ? readerName.first_name : 'Reader'}
                                     />
                                     <div className="username" onClick={showMenu}>
                                         Welcome, {readerName ? readerName.first_name : 'Reader'}!
                                     </div>
                                     <ul className="user_menu" style={ show ? {display: 'block'} : {display: 'none'}}>
                                         <li><Link to='/readinglist'>My Reading List</Link></li>
                                         <li><button  onClick={logout}>Logout</button></li>
                                     </ul>
                                 </div>
                             </li>
                            :
                            <>
                                <li className="navbar__link"><Link to="/login">Log in</Link></li>
                                <li className="navbar__link--btn"><Link to="/signup" className="btn btn-primary">Sign up</Link></li>
                            </>
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;