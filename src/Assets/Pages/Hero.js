import React from "react";
import HeroImg from "./Images/hero_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSpock } from "@fortawesome/free-regular-svg-icons";

export default function Hero() {
   
  return (
    <div className="Hero--Component">
      <div className="cont--1">
        <p>New Arrivals Only</p>
        <h1>
          New
          <FontAwesomeIcon
            icon={faHandSpock}
            style={{
              width: "60px",
              height: "60px",
              color: "green",
              marginLeft: "18px",
            }}
          />
          <br />
          Colletions For <br />
          Everyone
        </h1>
        <button className="btn">Latest Collection &#8594;</button>
      </div>
      <div className="cont--2">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
}
