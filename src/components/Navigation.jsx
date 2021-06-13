import React from 'react'
import "./Navigation.css"
import Group_220 from "../asset/Group_220.png"

function Navigation() {

    function navToggle(){
        let options = document.querySelector(".options")
        options.classList.toggle("navToggle");
    }

    return (
        <div className="navigation-wrapper">
            <div className="logo-and-title">
                <img className="logo" src={Group_220} />
                <h3 className="title">organic</h3>
            </div>

            <div onClick={navToggle} className="hamburger">
                <div className="ham-line"></div>
                <div className="ham-line"></div>
                <div className="ham-line"></div>
            </div>
            <div className="options">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Product</a></li>
                    <li><a>About us</a></li>
                    <li><a>Contact us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
