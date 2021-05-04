import React from 'react'
import "./index.css"
import img1 from "../../assets/mephoto2.jpeg"

import Routes from "../../Routes"

export default function Homepage() {
    return (
        <div className="home">
            <div className="photo1">
                <div className="photo12"><img className="image1" src={img1} alt=""/></div>
            </div>
            <div className="content">
            <Routes/>
            </div>
        </div>
    )
}
