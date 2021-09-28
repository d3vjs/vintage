import React from 'react'
import Announcement from '../../components/Announcement/Announcement';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import { StyledDiv } from './HomeStyles';

const Home = () => {
    return (
        <StyledDiv>
            <Announcement />
            <Navbar />
            <Slider />
        </StyledDiv>
    )
}

export default Home
