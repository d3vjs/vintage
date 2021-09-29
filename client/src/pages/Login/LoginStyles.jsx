import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
    ${tw`w-screen h-screen flex items-center justify-center`};
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("/assets/misc/login.jpeg")
        center;
    background-size: cover;
`;

export const Wrapper = styled.div`
    ${tw`p-12 bg-white w-1/3`};
`;

export const Title = styled.h1`
        ${tw`font-light text-3xl`}
`;

export const Form = styled.form`
    ${tw`flex flex-col`};
`;

export const Input = styled.input`
    min-width: 40%;
    padding: 10px;
    ${tw`flex-1 border-b my-4 border-solid border-gray-300 outline-none`};
`;

export const Link = styled.a`
        ${tw`my-2 text-xs underline cursor-pointer`};
`;

export const Button = styled.button`
    width: 40%;
    background-color: teal;
    ${tw`px-4 py-4 mb-4 text-white cursor-pointer`};
`;