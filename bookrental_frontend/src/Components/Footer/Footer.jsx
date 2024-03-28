import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import facebook_icon from '../Assets/facebook.png'
import insta_icon from '../Assets/instagram.png'
import x_icon from '../Assets/twitter.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
            </div>
            <ul className='footer-links'>
                <li>Home</li>
                <li>Brower</li>
                <li>About</li>
            </ul>
            <div className='footer-social-icon'>
                <div className="footer-icons-container">
                    <img src={ facebook_icon } alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={ insta_icon } alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={ x_icon } alt=""/>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer