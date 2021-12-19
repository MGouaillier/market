import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext, CartContext } from '../App'
import {
  Box,
  Image,
  Flex,
  Center,
  Heading,
  Text,
  Button,
  Spacer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'

const ProductDetail = () => {
  const [quantity, setQuantity] = useState<number>(1)
  const { productId } = useParams()
  const products = useContext(ProductsContext)
  const { addToCart } = useContext(CartContext)
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return <h2>404 pas trouvé</h2>
  }

  return (
    <Center>
      <Box
        maxW="800px"
        minW="800px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="15px"
      >
        <Flex>
          <Box maxW="50%" p="5">
            <Flex direction="column" align="space-between" height="100%">
              <Heading size="2xl" mb="5">
                {product.name}
              </Heading>
              <Heading size="1xl">{product.price} € /unité</Heading>
              <Spacer />
              <Text>{product.description}</Text>
              <Spacer />
              <NumberInput
                w="150px"
                defaultValue={1}
                min={1}
                max={product.stock}
                onChange={(quantity) => setQuantity(parseInt(quantity))}
                value={quantity}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Spacer />
              <Button
                colorScheme="teal"
                onClick={() => addToCart(product, quantity)}
              >
                Ajouter au panier
              </Button>
            </Flex>
          </Box>
          <Spacer />
          <Box>
            <Image
              boxSize="400px"
              src={product.imageUrl}
              objectFit="cover"
            ></Image>
          </Box>
        </Flex>
      </Box>
    </Center>
  )
}

export default ProductDetail
