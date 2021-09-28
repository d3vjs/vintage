import React from 'react'
import Announcement from '../../components/Announcement/Announcement';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import { StyledDiv } from './HomeStyles';

const Home = () => {
    return (
        <StyledDiv>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
        </StyledDiv>
    )
}

export default Home
