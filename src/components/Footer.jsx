import React from 'react'
import Logo from '../assets/Library.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/">
                    <figure className='footer__logo'>
                        <img src={Logo} className='footer__logo--img' alt="" />
                    </figure>
                </Link>
                <div className="footer__list">
                    <Link to="/" className="footer__link">HOME</Link>
                    <span className="footer__link no-cursor">ABOUT</span>
                    <Link to="/books" className="footer__link">BOOKS</Link>
                    <Link to="/cart" className="footer__link">CART</Link>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2021 Library
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;