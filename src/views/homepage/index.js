import React from "react";
import "./index.css";
import img1 from "../../assets/mephoto2.jpeg";
import About from "../../components/about";
//import Routes from "../../Routes"

export default function Homepage() {
  return (
    <div className="home">
      <div className="home-row1">
        <div className="photo1">
          <div className="photo12">
            <img className="image1" src={img1} alt="" />
          </div>
        </div>
        <div className="content">
          <About />
        </div>
      </div>
      <div className="home-row2">
        <svg
          className="svg1"
          width="611"
          height="447"
          viewBox="0 0 611 447"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="105.5" cy="105.5" r="105.5" fill="#FF8E8E" />
          <circle cx="505.5" cy="105.5" r="105.5" fill="#F5C5C5" />
          <circle cx="316.5" cy="341.5" r="105.5" fill="#E35151" />
        </svg>
      </div>
    </div>
  );
}
