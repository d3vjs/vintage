import styled from 'styled-components';
import tw from 'twin.macro';

import {mobile} from '../../breakpoints';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export const Container = styled.div`
    ${tw`w-full h-screen relative flex overflow-hidden`}
    ${mobile({display: 'none'})}
`;

export const Arrow = styled.div`
    ${tw`h-14 absolute text-gray-500 w-14 bg-gray-200 rounded-full flex items-center justify-center bottom-0 m-auto cursor-pointer`}
    opacity: 0.5;
    top: -100px;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    z-index: 2;
`;

export const LeftArrow = styled(ChevronLeftIcon)`
    ${tw`left-8`}
`;

export const RightArrow = styled(ChevronRightIcon)`
    ${tw`right-8`}
`;

export const Wrapper = styled.div`
    ${tw`h-full flex`}
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex  * -100}vw);
`;

export const SlideContainer = styled.div`
    ${tw`flex items-center w-screen h-screen`}
    background-color: #${props=> props.background}
`;

export const ImageContainer = styled.div`
    ${tw`flex-1 h-full flex items-center justify-center relative`}
`;

export const Image = styled.img`
    height: 80%;
    z-index: 2;
`;

export const Blob = styled.img`
    height: 30% !important:
    z-index: 1 !important;
    top: 0px;
    position: absolute;

`;

export const InfoContainer = styled.div`
    ${tw`flex-1 p-12`}
`;

export const Title = styled.h1`
    font-size: 70px;
`;

export const Description = styled.p`
    ${tw`my-12 font-medium`}
    font-size: 20px;
    letter-spacing: 3px;
`;

export const Button = styled.button`
    ${tw`px-2 pb-1 pt-2 bg-transparent cursor-pointer border border-solid border-black`}
    font-size: 20px;
`;