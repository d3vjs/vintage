import { HeartIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import React from 'react'
import { Circle, Container, Icon, Image, Info } from './SingleProductStyles';

const SingleProduct = ({ product }) => {
    return (
        <Container>
            <Circle />
            <Image src={product.img} />
            <Info>
                <Icon>
                    <ShoppingCartIcon className="w-6 h-6"/>
                </Icon>
                <Icon>
                    <SearchIcon className="w-6 h-6"/>
                </Icon>
                <Icon>
                    <HeartIcon className="w-6 h-6"/>
                </Icon>
            </Info>
        </Container>
    )
}

export default SingleProduct
