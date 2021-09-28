import React, { useState } from 'react'
import { Arrow, Blob, Button, Container, Description, Image, ImageContainer, InfoContainer, LeftArrow, RightArrow, SlideContainer, Title, Wrapper } from './SliderStyles'

import { sliderItems } from '../../data';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <LeftArrow />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <SlideContainer background={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                            <Blob src={item.blob} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </SlideContainer>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <RightArrow />
            </Arrow>
        </Container>
    )
}

export default Slider
