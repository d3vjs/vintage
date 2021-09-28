import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div``;

export const Title = styled.h1`
    margin: 20px;
    ${tw`text-3xl font-bold`}
`;

export const FilterContainer = styled.div`
    ${tw`flex justify-between mr-8`}
`;

export const Filter = styled.div`
    margin: 20px;
`;

export const FilterText = styled.span`
    ${tw`text-xl font-bold`};
`;

export const Select = styled.select`
    ${tw`p-4 m-8 outline-none`};
`;

export const Option = styled.option``;