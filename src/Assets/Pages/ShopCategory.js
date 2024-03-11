import React, { useContext } from 'react'
import CategoryComp from './CategoryComp'
import { ShopContext } from './ShopCategoryComp';

export default function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop--cont'>
      {  all_product.map((item,i)=>{
            if(props.category === item.category){
                return <CategoryComp key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
                return null;
            }
        })
    }
    </div>
  )
}
