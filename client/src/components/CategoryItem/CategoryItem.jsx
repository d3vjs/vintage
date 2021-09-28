import React from 'react'
import { MenuItem } from '../Navbar/NavbarStyles'
import { Container, Image, Info, Title, Button } from './CategoryItemStyles'

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
