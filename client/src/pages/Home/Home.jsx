import React from 'react'
import Announcement from '../../components/Announcement/Announcement';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
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
            <Newsletter />
            <Footer />
        </StyledDiv>
    )
}

export default Home
