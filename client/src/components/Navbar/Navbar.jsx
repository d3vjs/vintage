import React from 'react'
import {
    CartBage,
    CartIcon,
    CartWBadge,
    Center,
    Container,
    Input,
    InputSearchIcon,
    Language,
    Left,
    Logo,
    MenuItem,
    Right,
    SearchContainer,
    Wrapper
} from './NavbarStyles'

const Navbar = () => {
    return (
        <Container className="h-14">
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <InputSearchIcon />
                    </SearchContainer>
                </Left>
                <Center><Logo>VINTAGE.</Logo></Center>
                <Right>
                    <MenuItem>SIGN UP</MenuItem>
                    <MenuItem>LOG IN</MenuItem>
                    <MenuItem>
                        <CartWBadge>
                            <CartIcon />
                            <CartBage>4</CartBage>
                        </CartWBadge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
