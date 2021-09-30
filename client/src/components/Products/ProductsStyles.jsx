import styled from 'styled-components';
import tw from 'twin.macro';
import { mobile } from '../../breakpoints';

export const Container = styled.div`
    ${tw`flex p-12 flex-wrap justify-between items-center`};

    ${mobile({ flexDirection: "column", flexWrap: "nowrap" })}
`;