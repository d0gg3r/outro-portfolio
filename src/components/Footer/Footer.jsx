import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import './Footer.scss'

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-top">
        <div className="app__footer-top_item">
          <h3>CATEGORIES</h3>
          <Link to="/category/men">
            <span className="link">MENSWEAR</span>
          </Link>
          <Link to="/category/women">
            <span className="link">WOMENSWEAR</span>
          </Link>
          <Link to="/category/else">
            <span className="link">SOMETHING ELSE</span>
          </Link>
        </div>
        <div className="app__footer-top_item">
          <h3>LINKS</h3>
          <Link to={'/faq'}>
            <span className="link">FAQ</span>
          </Link>
          <Link to={'/policy'}>
            <span className="link">POLICY</span>
          </Link>
          <Link to={'/cookies'}>
            <span className="link">COOKIES</span>
          </Link>
        </div>
        <div className="app__footer-top_item">
          <h3>ABOUT</h3>
          <span className="link">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            adipisci facere dolorem, eos voluptates sequi quo totam cupiditate
            fugiat aut tempora a. Enim, facilis eius.
          </span>
        </div>
        <div className="app__footer-top_item">
          <h3>CONTACT</h3>
          <span className="link">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            vel magnam exercitationem sit molestiae quis!
          </span>
        </div>
      </div>
      <div className="app__footer-bottom">
        <div className="app__footer-bottom_left">
          <Link to="/">
            <h3>OUTRO</h3>
          </Link>
          <span>&#169;Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="app__footer-bottom_right">
          <FaFacebookF size={15} />
          <FaTwitter size={15} />
          <AiFillInstagram size={16} style={{ color: '#000' }} />
        </div>
      </div>
    </div>
  )
}

export default Footer
