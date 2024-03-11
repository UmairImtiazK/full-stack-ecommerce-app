import React, { useContext } from 'react'
import { ShopContext } from './ShopCategoryComp'
import all_product from './Images/all_product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

export default function CartItems() {
    const {cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className="cartMainParent">

    <div className='cartItemMain'>
        <div className="cartItems">
            <div className="itemsHeading">
                <div className='group--1'>
                <p>Products</p>
                <p>Title</p>
                </div>
                <div className="group--2">
                <p>Price</p>
                <p>Quantity</p>
                <p>Discount</p>
                <p>Remove</p>
                </div>
            </div>
            <p>________________________________________________________________________________________________________________________________________________________________________________________</p>

            {
                all_product.map((items)=>{
                    if(cartItems[items.id] > 0){
                        return  (
                            <>
                            <div className="itemDetail">
                        <img src={items.image} alt="" />
                        <p className='title'>{items.name}</p>
                        <p className='price'>${items.new_price}</p>
                        <strong className='quantity'>{cartItems[items.id]}</strong>
                        <p className="distcount">${ items.old_price - items.new_price}</p>
                        <FontAwesomeIcon onClick={()=>{removeFromCart(items.id)}} icon={faRemove} />
                        </div>
            <p>________________________________________________________________________________________________________________________________________________________________________________________</p>

                            </> 
                        )
                    }
                })
            }
            
        </div>
            </div>
    </div>
  )
}
