import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
    ${tw``}
`;

export const Wrapper = styled.div`
    padding: 50px;
    ${tw`flex`}
`;

export const ImgContainer = styled.div`
    ${tw`flex-1`}
`;

export const Image = styled.img`
    height: 90vh;
    ${tw`w-full object-cover`}
`;

export const InfoContainer = styled.div`
    padding: 0px 50px;
    ${tw`flex-1`}
`;

export const Title = styled.h1`
    ${tw`text-4xl`}
`;

export const Description = styled.p`
    ${tw`my-12 text-2xl font-light`}
`;

export const Price = styled.span`
    ${tw`font-light text-3xl`}
`;

export const FilterContainer = styled.div`
    ${tw`flex justify-between w-1/2 my-12`};
`;

export const Filter = styled.div`
    ${tw`flex items-center`};
`;

export const FilterTitle = styled.span`
    ${tw`text-2xl font-light`};
`;

export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    ${tw`rounded-full mx-2 cursor-pointer`};
    background-color: ${props => props.color};
`;

export const FilterSize = styled.select`
    ${tw`ml-4 p-2 outline-none`};
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
    ${tw`flex items-center justify-between w-1/2`};
`;

export const AmountContainer = styled.div`
    ${tw`flex items-center justify-center font-bold`};
`;

export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    ${tw`flex items-center justify-center mx-2 text-xl`};
`;

export const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    ${tw`border border-solid p-3 bg-white text-gray-500 cursor-pointer font-bold`};

    &:hover{
        background-color: #f8f4f4;
    }
`;
