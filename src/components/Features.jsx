import React from 'react'
import "./Features.css"

import Group_114 from "../asset/Group_114.png"
import Group_207 from "../asset/Group_207.png"
import Group_205 from "../asset/Group_205.png"


function Features() {
    return (
        <div className="features-wrapper">
            <img src={Group_114} />
            <h1>Welcome to Nature</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="featureCards">
                <img src={Group_207} />
                <img src={Group_205} />
                <img src={Group_207} />
                <img src={Group_207} />
            </div>
        </div>
    )
}

export default Features
