import React from 'react'
import "./Sponsors.css"

import Group_64 from "../asset/Group_64.png"
import Group_39 from "../asset/Group_39.png"
import Group_55 from "../asset/Group_55.png"

function Sponsors() {
    return (
        <div className="sponsors-wrapper">
            <h1>Proudly presented by</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>

            <div className="sponsorCards">
                <img src={Group_39} />
                <img src={Group_64} />
                <img src={Group_55} />
                <img src={Group_64} />
                <img src={Group_39} />
            </div>
        </div>
    )
}

export default Sponsors
