import { HomeIcon, LocationMarkerIcon, MailIcon } from '@heroicons/react/outline'
import React from 'react'
import { Container, Center, Description, Image, Left, Right, SocialContainer, SocialIcon, Logo, Title, List, ListItem, ContactItem, Payment } from './FooterStyles'

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    VINTAGE.
                </Logo>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora quis molestiae. Pariatur doloribus doloremque et! Suscipit, quibusdam veritatis. Necessitatibus odio ipsam vitae quam. Distinctio, autem. Quo quas nesciunt sed.
                </Description>
                <SocialContainer>
                    <SocialIcon>
                        <Image src={'/assets/social/facebook.png'} />
                    </SocialIcon>
                    <SocialIcon>
                        <Image src={'/assets/social/instagram.png'} />
                    </SocialIcon>
                    <SocialIcon>
                        <Image src={'/assets/social/twitter.png'} />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <LocationMarkerIcon className="w-6 h-6 mr-3"/>
                    Some Addres, Soomewhere 1234
                </ContactItem>
                <ContactItem>
                    <HomeIcon className="w-6 h-6 mr-3"/>
                    +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailIcon  className="w-6 h-6 mr-3" />
                    myemail@gmail.com
                </ContactItem>
                <Payment src="/assets/misc/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
