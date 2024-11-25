import React from 'react'
import './ProductPage.css'


const ProductPage = (props) => {
    const {product} = props;
    console.log(props)

  return (
    <div className='productpage'>
        HOME >> SHOP >> {product.category} >> {product.name}
    </div>
  )
}

export default ProductPage