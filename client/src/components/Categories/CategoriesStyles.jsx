import styled from 'styled-components';
import tw from 'twin.macro';
import { mobile } from '../../breakpoints';

export const Container = styled.div`
    ${tw`flex p-8 justify-between`};

    ${mobile({padding: "0px", flexDirection: "column"})}
`;