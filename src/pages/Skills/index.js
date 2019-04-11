import React from 'react';

import './style.scss';
import logo from "../../img/SKILLS_ICON.png";

const Skills = () => (
    <div className="skills justify-content-center container">
        <div className="block-title">
            <img src={logo} alt="" />
            <span>Skills</span>
            <span className="lines"></span>
        </div>
        <div className="skills__block">
            <div className="html-css">
                <div>HTML/CSS</div>
                <div className="circles">
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                </div>
            </div>
            <div className="bootstrap">
                <div>Bootstrap</div>
                <div className="circles">
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                </div>
            </div>
            <div className="javaScript">
                <div>JavaScript ES5/ES6</div>
                <div className="circles">
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                </div>
            </div>
            <div className="react">
                <div>React JS</div>
                <div className="circles">
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__blue"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                    <span className="circles__gray"></span>
                </div>
            </div>
        </div>
    </div>
)

export default Skills;