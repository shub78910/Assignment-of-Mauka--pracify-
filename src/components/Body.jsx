import React, { useState } from 'react'
import "./Body.css"
import { Button } from '@material-ui/core';

import Group_228 from "../asset/Group_228.png"
import Group_195 from "../asset/Group_195.png"


function Body() {
    return (
        <div className="body-wrapper">
            <div className="body-wrapper-left">
                <div>
                    <span className="line-one">Healthy life with</span><br/>
                    <span className="line-two">Nature Organic</span>
                </div>
                <p>Vegetables are the edible parts of a plant
                    that is used in cooking or can be eaten now.
                </p>

                <Button color="primary" variant="contained" style={{borderRadius: "1rem", backgroundColor:"#00dbd0" }}>Explore Now</Button>
            </div>

            <div className="body-wrapper-right">
                <img className="bottom_image" src={Group_228} />
                <img className="top_image" src={Group_195} />
            </div>
        </div>
    )
}

export default Body
