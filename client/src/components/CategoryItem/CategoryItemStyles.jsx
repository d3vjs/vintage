import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
    ${tw`flex-1 m-2 relative`}
    height: 70vh;
`;

export const Image = styled.img`
    ${tw`w-full h-full object-cover`}
`;

export const Info = styled.div`
    ${tw`absolute w-full h-full top-0 left-0 items-center justify-center flex flex-col`}
    background: linear-gradient(rgba(0,0,0, .1), rgba(0,0,0, .9));
`;

export const Title = styled.h1`
    ${tw`text-white absolute mb-6 text-3xl font-bold bottom-24`};
`;

export const Button = styled.button`
    ${tw`border border-solid p-3 absolute bottom-12 bg-white text-gray-500 cursor-pointer font-bold`};
`;