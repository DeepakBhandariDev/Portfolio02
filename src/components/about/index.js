import React from "react";

import "./index.css";
import stockData from "../../data.json";

export default function About() {
  var anchorstyle = {
    textDecoration: "none",
  };
  return (
    <div className="about">
      {stockData.map((data) => {
        return (
          <div className="typewriter" key="data.name">
            <p>🇳🇵🇫🇮 {data.name},{data.education[0].organization}</p>
            <p>{data.education[0].title}</p>
            <p>Full-Stack Web-Dev{" "}
                <a href="https://www.integrify.io" style={anchorstyle}>
                  @IntegrifyIO
                </a></p>

            </div>
        );
      })}
    </div>
  );
}
