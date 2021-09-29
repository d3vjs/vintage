import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
    ${tw``};
`;

export const Wrapper = styled.div`
    ${tw`pb-24`};
`;

export const Title = styled.h1`
    ${tw`font-light text-center text-4xl`};
`;

export const Top = styled.h1`
    ${tw`flex items-center justify-between p-5`};
`;

export const ButtonTop = styled.button`
    ${tw`p-2 font-bold cursor-pointer`};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div`
    ${tw``};
`;

export const TopText = styled.span`
    ${tw`underline cursor-pointer mx-2`};
`;

export const Bottom = styled.h1`
    ${tw`flex justify-between`};
`;

export const Info = styled.div`
    flex: 3;
    ${tw``};
`;

export const Product = styled.div`
    ${tw`flex justify-between`};
`;

export const ProductDetail = styled.div`
    ${tw`flex`};
    flex: 2;
`;

export const Image = styled.img`
    width: 200px;
`;

export const Details = styled.div`
    ${tw`p-5 flex flex-col justify-around`};
`;

export const ProductName = styled.span`
    ${tw`space-x-2`};
`;

export const ProductId = styled.span`
    ${tw`space-x-2`};
`;

export const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    ${tw`rounded-full`};
`;

export const ProductSize = styled.span`
    ${tw`space-x-2`};
`;

export const PriceDetail = styled.div`
    ${tw`flex-1 flex flex-col items-center justify-center`};
`;

export const ProductAmountContainer = styled.div`
    ${tw`flex items-center mb-5`};
`;

export const ProductAmount = styled.div`
    ${tw`text-2xl m-2`};
`;

export const ProductPrice = styled.div`
    ${tw`text-4xl font-extralight`};
`;

export const HorizontalLine = styled.hr`
    ${tw`bg-gray-400`};
`;

export const Summary = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 10px;
    ${tw`p-5 m-5 flex-1 flex flex-col justify-between`};
`;

export const SummaryTitle = styled.h1`
    ${tw`font-extralight text-3xl`};
`;

export const SummaryItem = styled.div`
    ${tw`my-7 flex justify-between`};

    font-weight: ${props => props.type === "total" && "600"};
    font-size: ${props => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span`
    ${tw``};
`;

export const SummaryItemPrice = styled.span`
    ${tw``};
`;

export const SummaryButton = styled.button`
    ${tw`w-full p-2 bg-black text-white font-bold`};
`;





export const ButtonBottom = styled.button`
    ${tw``};
`;