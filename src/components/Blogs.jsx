import React from 'react'
import "./Blogs.css"
import { Button } from '@material-ui/core';


import Group_11 from "../asset/Group_11.png"
import Group_12 from "../asset/Group_12.png"
import Group_13 from "../asset/Group_13.png"


function Blogs() {
    return (
        <div className="blog-wrapper">
            <h1>Read Our Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incidident ut labore et dolore magna aliqua.</p>

            <div className="blog-cards">
                <div className="blog-card">
                    <img src={Group_11} />
                    <h3>Blog One</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incidident ut labore et dolore magna aliqua</p>
                    <Button>Read more</Button>    
                </div>

                <div className="blog-card">
                    <img src={Group_12} />
                    <h3>Blog Two</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incidident ut labore et dolore magna aliqua</p>
                    <Button>Read more</Button>    
                </div>

                <div className="blog-card">
                    <img src={Group_13} />
                    <h3>Blog Three</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incidident ut labore et dolore magna aliqua</p>
                    <Button>Read more</Button>    
                </div>
            </div>
        </div>
    )
}

export default Blogs
