import { MinusIcon, PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Bottom, ButtonTop, Container, Details, HorizontalLine, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetail, ProductId, ProductName, ProductPrice, ProductSize, Summary, SummaryButton, SummaryItem, SummaryItemText, SummaryTitle, Title, Top, TopText, TopTexts, Wrapper } from './CartStyles'

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <ButtonTop>CONTINUE SHOPPING</ButtonTop>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <ButtonTop type="filled">CHECKOUT NOW</ButtonTop>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="/assets/misc/sample-cart-product.png" />
                                <Details>
                                    <ProductName><b>Product:</b><span>JESSIE THUNDER SHOES</span></ProductName>
                                    <ProductId><b>ID:</b><span>564765893</span></ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size: </b><span>38.5</span></ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <MinusIcon className="w-6 h-6" />
                                    <ProductAmount>1</ProductAmount>
                                    <PlusIcon className="w-6 h-6" />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <HorizontalLine />
                        <Product>
                            <ProductDetail>
                                <Image src="/assets/misc/sample-cart-product-2.png" />
                                <Details>
                                    <ProductName><b>Product:</b><span>HAKURA T-SHIRT</span></ProductName>
                                    <ProductId><b>ID:</b><span>564765893</span></ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize><b>Size: </b><span>M</span></ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail type="price-amount">
                                <ProductAmountContainer>
                                    <MinusIcon className="w-6 h-6 cursor-pointer" />
                                    <ProductAmount>2</ProductAmount>
                                    <PlusIcon className="w-6 h-6 cursor-pointer" />
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$ 80</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemText>$ 4</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemText>$ -4</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemText>$ 80</SummaryItemText>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
