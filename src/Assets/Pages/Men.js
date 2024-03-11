import React from 'react'
import Banner from './BannerPro'
import ShopCategory from './ShopCategory';

export default function Men(props) {
  return (
    <>
    <Banner banner={props.banner} />
    <div className='Shop--Category'>
    <ShopCategory category={props.category} />
      
    </div>
    </>
  )
}
