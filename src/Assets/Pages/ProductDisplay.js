import React, { useContext } from 'react'
import { ShopContext } from './ShopCategoryComp';

export default function ProductDisplay(props) {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='ProductDisplay'>
      <div className="cont--1">
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      </div>
      <div className="cont--2">
      <img src={product.image} alt="" />
      </div>
      <div className="cont--3">
        <h1>{product.name}</h1>
        <p className='Rating'> &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9734; (122)</p>
        <p >
        <strong className='active'>${product.new_price}</strong>
        <strong className='Unactive'>${product.old_price}</strong>
        </p>

        <div className="Size">
            <h2>Select Size</h2>
            <button className="btn">S</button>
            <button className="btn">M</button>
            <button className="btn">L</button>
            <button className="btn">XL</button>
            <button className="btn">XXl</button>
        </div>
        <button onClick={(e)=>{e.preventDefault(); addToCart(product.id)}} className='btn--cart'>Add To Cart</button>
        <p><strong>Category: </strong>
        {product.category}, T-Shirt Crop Top
        </p>

        <p><strong>Tags: </strong>
        Modern, Latest </p>
      </div>
    </div>
  )
}
