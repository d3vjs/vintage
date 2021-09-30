import styled from 'styled-components';
import tw from 'twin.macro';
import { mobile } from '../../breakpoints';

export const Container = styled.div`
    ${tw`h-8 bg-green-500 text-white flex items-center justify-center text-sm font-bold`}

    ${mobile({ maxWidth: "100vw"})}
`;