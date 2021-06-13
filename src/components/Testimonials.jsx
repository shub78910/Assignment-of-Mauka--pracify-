import React from 'react'
import "./Testimonials.css"
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';


import Group_86 from "../asset/Group_86.png"
import Group_10 from "../asset/Group_10.png"

function Testimonials() {
    return (
        <div className="testimonial-wrapper">
            <img className="inverted-comma" src={Group_86} /><br />
            <img className="profile" src={Group_10} />

            <h2>Jane Doe</h2>
            <p>Thank you for all the amazing produce and products you deliver each week…
                you make my life so easy an bring goodness into our family eating.
                I’ve been roasting a lot of brussel sprouts and</p>


            <h1>Subscriber to Our Newsletter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>

            <Input placeholder="Enter your email" />
            <Button color="primary" variant="contained" style={{borderRadius: "1rem", backgroundColor:"#00dbd0" }} >Subscribe</Button>    
        </div>
    )
}

export default Testimonials
