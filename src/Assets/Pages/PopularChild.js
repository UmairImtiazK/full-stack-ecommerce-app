import React from 'react'

export default function PopularChild({data_product}) {
  return (
    data_product.map((data,id)=>(<div className='popular--child--cont' key={id}>
      <img src={data.image} alt="" />
      <h4>{data.name}</h4>
        <strong className='active'>${data.new_price}</strong>
        <strong>${data.old_price}</strong>
    </div>))
  )
}
