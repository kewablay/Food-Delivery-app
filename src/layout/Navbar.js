import React from "react";
import {}  from "@mui/material"
import cart from "../assets/icons/cart.png";
import {SearchRounded, ShoppingCartRounded, BarChart} from "@mui/icons-material"
import menu from "../assets/icons/menu.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <h3>Delivr</h3>
      </div>
      <div className="navbar__search">
        {/* <img id="icon" src={search} alt="" /> */}
        <SearchRounded className="search" />
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="navbar__cart">
        {/* <img id="icon" src={cart} alt="cart" /> */}
        <ShoppingCartRounded className="cart" />
        <div className="cart__number"><p>0</p></div>
      </div>
      <div className="navbar__profile">
        <div className="profile__bg"><h4>KB</h4></div>
        <p className="profile__name">Hi, Kewa Blay</p>
      </div>
      <div className="navbar__toggle">
        <BarChart className="toggle__menu" />
      </div>
    </header>
  );
}

export default Navbar;
