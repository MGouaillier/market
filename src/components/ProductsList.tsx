import React, { useContext } from 'react'
import { Wrap, WrapItem, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import Product from '../types/ProductType'
import { ProductsContext } from '../App'

const ProductsList = () => {
  const products = useContext(ProductsContext)

  return (
    <Wrap justify="center" m="15px">
      {products.map((product: Product) => {
        return (
          <WrapItem key={product.id}>
            <Link to={'/product/' + product.id}>
              <ProductCard product={product}></ProductCard>
            </Link>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

export default ProductsList
