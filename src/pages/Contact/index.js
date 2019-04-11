import React from 'react';

import "./style.scss";
import logo from "../../img/Phone_Icon.png";

const Contact = (props) => { 
    console.log(props)
    return (
    <div className="contact justify-content-center container">
        <div className="block-title">
            <img src={logo} alt="" />
            <span>Contact</span>
            <span className="lines"></span>
        </div>
        <div className="contact__block">
            <div className="address">Address<span className="contact__info">Ukraine, Kiev</span></div>
            <div className="mail">E-mail<span className="contact__info">nr@gmail.com</span></div>
            <div className="phone">Phone<span className="contact__info">+38 093 111 11 11</span></div>
            <div className="website">Website<span className="contact__info">nikita-remeslov.com</span></div>
        </div>
    </div>
    )
}

export default Contact;