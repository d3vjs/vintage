import styled from 'styled-components';
import tw from 'twin.macro';

export const Info = styled.div`
    ${tw`flex w-full h-full absolute top-0 left-0 bg-black items-center justify-center cursor-pointer`};
    opacity: 0;
    background: linear-gradient(rgba(0,0,0, .2), rgba(0,0,0, .8));
    z-index: 3;
    transition: all .5s ease;
`;

export const Container = styled.div`
    ${tw`flex-1 m-3 flex justify-center items-center bg-gray-200 relative`};
    min-width: 280px;
    height: 350px;
    
    &:hover ${Info}{
        opacity: 1;
    }
`;

export const Circle = styled.div`
    width: 200px;
    height: 200px;
    ${tw`rounded-full bg-white absolute`};
`;

export const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

export const Icon = styled.div`
    ${tw`flex rounded-full bg-white items-center justify-center m-4`};
    width: 40px;
    height: 40px;
    transition: all 0.2s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;