import React from "react";
import "./index.css";

export default function Header() {
  return (
    <div className="headmain">
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div className="">
            <div className="">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lo">
      <div className="words word-1">
        <span>D</span>
        <span>E</span>
        <span>E</span>
        <span>P</span>
        <span>A</span>
        <span>K</span>
        <span>&nbsp;</span>
      </div>

      <div className="words word-2">
      <span>B</span>
        <span>H</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>A</span>
        <span>R</span>
        <span>I</span>
      </div>

      </div>
    </div>
  );
}
