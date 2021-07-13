import React from 'react';
import '../App.css';
import logo from '../images/logo2.png';
import Type from "./Type";




function Home() {
    return (
        <div className="navdiv">
            <nav>
                <ul>
                    <h1>Portfolio</h1>
                    <a href="#contact"> <button className="btn1">contact</button></a>
                    <a href="#project"> <button className="btn2">Work</button></a>
                </ul>
            </nav>
            <div className="maindiv col-10">
                <p className="para-main">Hi There!<span className="wave">👋🏻</span><br />
                    My field of Interest's are building <br />new  Web Technologies and <br />I have at least learnt something.<br />
                    <Type /></p>
            </div>
            <a href="#list"><button className="btn btn-info btn3">Explore More</button></a>
            <img src={logo} alt="logo" width="30%" className="imglogo" />
        </div>
    )
}

export default Home;