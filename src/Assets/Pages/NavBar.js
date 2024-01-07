import React,{useState} from 'react'
import Logo from './Images/logo.png'
import Cart from './Images/cart_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  const [toggle, settoggle] = useState(true);
  const handleonclick = ()=>{
      settoggle(!toggle);
  }
  return (
    <div className='NavBar'>
      <div className="cont--1">
        <img src={Logo} alt="" />
        <h2>SHOPPER</h2>
      </div>{toggle && (

        <div className="cont--2">
        <ul>
            <li className="Links"><a href="#">Shop</a></li>
            <li className="Links"><a href="#">Men</a></li>
            <li className="Links"><a href="#">Women</a></li>
            <li className="Links"><a href="#">Kids</a></li>
        </ul>
      </div>
        )}
      <div className="cont--3">
        <button className='btn--login'>Login</button>
        <img src={Cart} alt="" />
        <div className="cart--icon--counter">0</div>
        <FontAwesomeIcon onClick={handleonclick} className='cheveron--icon' icon={!toggle? faChevronUp : faChevronDown} />
      </div>
    </div>
  )
}
