import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import Product from '../types/ProductType'

export const ProductContext = React.createContext({})

type ProductProps = {
  product: Product
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Box w="250px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2">
      <Image w="100%" h="150" objectFit="cover" src={product.imageUrl} />
      <Box m="2">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.name}
        </Box>
        <Box>
          {product.price}
          <Box as="span" color="gray.600" fontSize="sm">
            € /unité
          </Box>
        </Box>
        <Box as="span" color="gray.600" fontSize="sm">
          {product.stock} disponibles
        </Box>
      </Box>
    </Box>
  )
}

export default ProductCard
