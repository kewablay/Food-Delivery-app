import React from "react";
import Delivery from '../assets/images/delivery.png'

function Banner({ discount, link }) {
  return (
    <div className="mainContainer__banner">
      <div className="banner__intro">
        <h2>Welcome to Deliver</h2>
        <p>
          Get free discount for every <span>$ {discount}</span>
        </p>
        <a href={link}>Get started</a>
      </div>
      <div className="banner__img">
        <img src={Delivery} alt="deliver" />
      </div>
      <div className="banner__ring"></div>
    </div>
  );
}

export default Banner;
