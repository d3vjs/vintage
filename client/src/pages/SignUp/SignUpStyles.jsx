import styled from 'styled-components';
import tw from 'twin.macro';
import { mobile } from '../../breakpoints';

export const Container = styled.div`
    ${tw`w-screen h-screen flex items-center justify-center`};
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("/assets/misc/signup.jpeg")
        center;
    background-size: cover;

    ${mobile({width: "auto", height: "100%", minHeight: "100vh", padding: "20px"})}
`;

export const Wrapper = styled.div`
    width: 50%;
    ${tw`p-12 bg-white`};
    ${mobile({ width: "90%", height: "auto", padding: "20px"})}
`;

export const Title = styled.h1`
        ${tw`font-light text-3xl`}
`;

export const Form = styled.form`
    ${tw`flex flex-wrap`};
`;

export const Input = styled.input`
    min-width: 40%;
    margin: 20px 40px 0px 0px;
    padding: 10px;
    ${tw`flex-1 border-b border-solid border-gray-300 outline-none`};
`;

export const Agreement = styled.span`
        ${tw`my-8`};
`;

export const Button = styled.button`
    width: 40%;
    background-color: teal;
    ${tw`px-4 py-4 text-white cursor-pointer`};
    ${mobile({padding: "10px 5px"})}
`;