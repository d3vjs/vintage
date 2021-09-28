import React from 'react'
import Announcement from '../../components/Announcement/Announcement';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';
import Slider from '../../components/Slider/Slider';
import { StyledDiv } from './HomeStyles';

const Home = () => {
    return (
        <StyledDiv>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
        </StyledDiv>
    )
}

export default Home
