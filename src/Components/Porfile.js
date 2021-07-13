import React from 'react';
import "../App.css";
import swap from "../images/swap2.jpg";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


function Profile() {
    return (
        <div className="profilediv">
            <div>
                <img src={swap} className="img-swap" alt="swapnil shrivastava" />
            </div>
            <h2 className="swap-name">Swapnil Shrivastava</h2>
            <div className="socialdiv">
                <a href="https://github.com/swap769" target="#" className="git-social"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/swapnil-shrivastava-bb5946194/" target="#" className="git-social"><FaLinkedinIn /></a>
            </div>
        </div>
    )
}
export default Profile;
