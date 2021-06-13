import React from 'react'
import "./Footer.css"

import Group_225 from "../asset/Group_225.png"
import Group_99 from "../asset/Group_99.png"
import Group_100 from "../asset/Group_100.png"
import Group_105 from "../asset/Group_105.png"

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-col-one">
                <img src={Group_225} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor </p>
                    
                    <small>© Copyright 2020 Nature</small>
            </div>
            <div className="footer-col-two">
                <h3>Information</h3> 
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>Products</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Teams of service</a></li>
                </ul>
            </div>
            <div className="footer-col-three">
                <h3>Follow Us</h3> 
                <img src={Group_99} />
                <img src={Group_100} />
                <img src={Group_105} />
            </div>

        </div>
    )
}

export default Footer
