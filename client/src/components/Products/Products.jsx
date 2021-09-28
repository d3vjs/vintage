import React from 'react'
import { Container } from './ProductsStyles'

import { popularProducts } from '../../data'
import SingleProduct from '../SingleProduct/SingleProduct'

const Products = () => {
    return (
        <Container>
            {popularProducts.map(product => (
                <SingleProduct product={product} key={product.id}/>
            ))}
        </Container>
    )
}

export default Products
