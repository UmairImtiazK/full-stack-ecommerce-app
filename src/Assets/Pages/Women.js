import React from 'react'
import Banner from './BannerPro'
import ShopCategory from './ShopCategory';

export default function Women(props) {
    const banner = props.banner;
  return (
    <>
    <Banner banner={banner} />
    <div className='Shop--Category'>
    <ShopCategory category={props.category} />
    </div>
    </>
  )
}
