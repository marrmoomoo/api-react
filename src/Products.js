import React from 'react'
import Product from './Product'

const Products = ({products}) => (
  <ul>
    { products.map( (product, i) => <Product key={i} theProduct={product} />)}
  </ul>
)

export default Products
