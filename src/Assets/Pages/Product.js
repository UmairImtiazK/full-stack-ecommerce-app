import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProductDisplay from './ProductDisplay';
import {ShopContext} from './ShopCategoryComp'
export default function Product() {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
   return (
    <div  className='productDisplayMain'>
      <ProductDisplay product={product} />
    </div>
  )
}
