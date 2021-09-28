import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    ${tw`flex items-center justify-center flex-col`};
`;

export const Title = styled.h1`
    ${tw`text-5xl mb-8 font-bold`};
`;

export const Description = styled.div`
    ${tw`text-2xl font-bold mb-8`};
`;

export const InputContainer = styled.div`
    ${tw`w-1/2 h-12 bg-white flex justify-between items-center border border-solid border-gray-200`};
`;

export const Input = styled.input`
    ${tw`outline-none pl-4`};
    flex: 8;
`;

export const Button = styled.button`
    ${tw`flex items-center justify-center text-white h-full transition duration-500 ease-in-out bg-green-500 hover:bg-green-600 `};
    flex: 2;
    svg {
        transform: rotate(90deg);
    }
`;
