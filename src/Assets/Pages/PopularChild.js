import React from 'react'
import { Link } from 'react-router-dom'

export default function PopularChild(props) {
  return (
    props.data_product.map((data,id)=>(<div className='popular--child--cont' key={id}>
     <Link to={`/product/${data.id}`}>
      <img src={data.image} alt="" />
     </Link>
      <h4>{data.name}</h4>
        <strong className='active'>${data.new_price}</strong>
        <strong>${data.old_price}</strong>
    </div>))
  )
}
