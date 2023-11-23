import React from 'react'
import './footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintrester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt='footer logo' />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt='app icon' />
                </div>
                <div className="footer-icons-container">
                    <img src={pintrester_icon} alt='app icon2' />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt='app icon3' />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
