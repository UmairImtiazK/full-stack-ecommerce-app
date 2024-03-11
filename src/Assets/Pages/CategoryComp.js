import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryComp(props) {
  return (
    <div className='popular--child--cont' >
     <Link to={`/product/${props.id}`}>
     <img  src={props.image} alt="" />
     </Link> 
      <h4>{props.name}</h4>
        <strong className='active'>${props.new_price}</strong>
        <strong>${props.old_price}</strong>
    </div>
  )
}
