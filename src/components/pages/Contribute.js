import React from 'react';
import { Link } from 'react-router-dom';
import AuthorSVG from '../SVG/AuthorSVG';
import BooksSVG from '../SVG/BooksSVG';
import CategoriesSVG from '../SVG/CategoriesSVG';

const Contribute = () => {
    return (
        <>
            <h1 className="contribute-title">BookWave is better with your contribution:</h1>
            <p className="contribute-para">
                With your contribution to BookWave, you're helping an entire community of book lovers discovers new
                books, authors or even genres.
            </p>
            <div className="contribute-cards">
                <div className="contribute-card">
                    <Link to="/books/add">
                        <div className="contribute-card__illu">
                            <BooksSVG />
                        </div>
                        <div className="contribute-card__title">Add a New Book</div>
                    </Link>
                </div>
                <div className="contribute-card">
                    <Link to="/authors/add">
                        <div className="contribute-card__illu">
                            <AuthorSVG />
                        </div>
                        <div className="contribute-card__title">Add a New Author</div>
                    </Link>
                </div>
                <div className="contribute-card">
                    <Link to="categories/add">
                        <div className="contribute-card__illu">
                            <CategoriesSVG />
                        </div>
                        <div className="contribute-card__title">Add a New Category</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Contribute;