import React from 'react';
import "../styles/footer.css";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div className='footerTitleBox'>
                <h1>TECHNO.LOGY</h1>
                <p>@All Rights Reserve</p>
            </div>
            <div className='followUsLinkBox'>
                <h4>
                    Follow Us On
                </h4>
                <div>
                    <a href="/">{<AiFillFacebook />}</a>
                    <a href="/">{<AiFillInstagram />}</a>
                    <a href="/">{<AiFillTwitterSquare />}</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer