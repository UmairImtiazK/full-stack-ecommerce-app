import React, { useContext, useState } from "react";
import Logo from "./Images/logo.png";
import Cart from "./Images/cart_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopCategoryComp";

export default function NavBar() {
  const [toggle, settoggle] = useState(true);
  const {calculateTotall} = useContext(ShopContext);
  const handleonclick = () => {
    settoggle(!toggle);
  };
  return (
    <div className="NavBar">
      <div className="cont--1">
        <img src={Logo} alt="" />
        <h2>SHOPPER</h2>
      </div>
      {toggle && (
        <div className="cont--2">
          <ul>
            <li className="Links">
              <Link to="/">Shop</Link>
            </li>
            <li className="Links">
              <Link to="/men">Men</Link>
            </li>
            <li className="Links">
              <Link to="/women">Women</Link>
            </li>
            <li className="Links">
              <Link to="/kids">Kids</Link>
            </li>
          </ul>
        </div>
      )}
      <div className="cont--3">
        <Link to='/login'>
        <button className="btn--login">Login</button>
        </Link>

        <Link to='/cart'>
        <img src={Cart} alt="" />
        </Link>
        <div className="cart--icon--counter">{calculateTotall()}</div>
        <FontAwesomeIcon
          onClick={handleonclick}
          className="cheveron--icon"
          icon={!toggle ? faChevronUp : faChevronDown}
        />
      </div>
    </div>
  );
}
