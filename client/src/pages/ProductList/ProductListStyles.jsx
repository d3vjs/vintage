import styled from 'styled-components';
import tw from 'twin.macro';
import { mobile } from '../../breakpoints';

export const Container = styled.div`
    ${mobile()}
`;

export const Title = styled.h1`
    margin: 20px;
    ${tw`text-3xl font-light`}
`;

export const FilterContainer = styled.div`
    ${tw`flex justify-between mr-8`}

    ${mobile({ margin: "0px 5px", flexDirection: "column" })}
`;

export const Filter = styled.div`
    margin: 20px;

    ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

export const FilterText = styled.span`
    ${tw`text-xl font-bold`};
`;

export const Select = styled.select`
    ${tw`p-4 m-8 outline-none`};
    ${mobile({ margin: "0px", padding: "10px 0px"})}
`;

export const Option = styled.option``;