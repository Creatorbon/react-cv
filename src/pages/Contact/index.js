import React from 'react';

const Contact = (props) => { 
    console.log(props)
    return (
    <div className="contact">
        <div className="block_title">
            <img src="img/Phone_Icon.png" alt="" />
            <span>Contact</span>
            <span className="lines"></span>
        </div>
        <div className="contact_block">
            <div className="address">Address<span className="contact_info">Ukraine, Kiev</span></div>
            <div className="mail">E-mail<span className="contact_info">nr@gmail.com</span></div>
            <div className="phone">Phone<span className="contact_info">+38 093 111 11 11</span></div>
            <div className="website">Website<span className="contact_info">nikita-remeslov.com</span></div>
        </div>
    </div>
    )
}

export default Contact;