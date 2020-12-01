import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div>
                    <Logo />
                </div>
                <div>
                    <h2 className="footer_title">Useful Links</h2>
                    <ul className="footer_liks">
                        <li><Link>Home</Link></li>
                        <li><Link>Login</Link></li>
                        <li><Link>Signup</Link></li>
                        <li><Link>Contribute</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="footer_title">Contact</h2>
                    <ul className="footer_info">
                        <li>Phone: +123 456 789</li>
                        <li>Email: fake@mail.com</li>
                        <li><address>3469  Smithfield Avenue, MILFORD</address></li>
                    </ul>
                </div>
                <div>
                    <h2 className="footer_title">Follow us on social media!</h2>
                    <ul className="footer_social-media">
                        <li>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#393939" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#393939" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;