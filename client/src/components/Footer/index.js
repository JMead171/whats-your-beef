import React from 'react';
import iconFB from '../../assets/icon_facebook.png';
import iconInsta from '../../assets/icon_instagram.png';
import iconYou from '../../assets/icon_youtube.png';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-col">Gift Center</div>
            <div className="footer-col">Resources</div>
            <div className="footer-col">Corporate</div>
            <div className="footer-col">Customer Service</div>
            <div className="footer-col">
                <a href="https://facebook.com"><img src={iconFB} alt="Facebook" /></a>
                <a href="https://instagram.com"><img src={iconInsta} alt="Instagram" /></a>
                <a href="https://youtube.com"><img src={iconYou} alt="You Tube" /></a>
            </div>
        </div>
    );
};

export default Footer;