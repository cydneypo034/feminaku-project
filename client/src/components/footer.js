import React from 'react';
import Geometric from './images2/HW97Y94.jpg'

class Footer extends React.Component {
        render () {
            return (
                <div>
                <img className="about-background-image" src={Geometric} alt="town" width="100%" height="410"/>
                <h1 className="footer-centered">Contact Us </h1>
                <p className="footer-paragraph">We'll be adding categories soon! If you want to keep up with what we're doing, follow Us on Instagram at @feminakuoffical and find us 
                on Facebook at Feminaku Official!</p>
                </div>
            )
        }
    }
    
    
    export default Footer;