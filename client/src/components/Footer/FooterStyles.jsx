import styled from 'styled-components';
import tw from 'twin.macro';
import { mobile } from '../../breakpoints';

export const Container = styled.div`
    ${tw`flex`};
    ${mobile({flexDirection: "column"})}
`;

export const Left = styled.div`
    ${tw`flex flex-1 flex-col p-8`};
`;

export const Logo = styled.h1`
    ${tw`text-3xl font-bold`};
`;

export const Description = styled.p`
    ${tw`my-6`};
`;

export const SocialContainer = styled.div`
    ${tw`flex`};
`;

export const SocialIcon = styled.div`
    width: 40px; 
    height: 40px;
    margin-right: 20px;
    ${tw`flex items-center justify-center`};
`;

export const Image = styled.img`
    src: ${props => props.img}
`;

export const Center = styled.div`
    padding: 20px;
    ${tw`flex-1`};
    ${mobile({display: "none"})}
`;

export const Title = styled.h3`
    ${tw`mb-8 font-bold text-xl`};
`;

export const List = styled.ul`
    ${tw`flex flex-wrap`};
`;

export const ListItem = styled.li`
    ${tw`w-1/2 mb-3`};
`;

export const Right = styled.div`
    padding: 20px;
    ${tw`flex-1`};

    ${mobile({backgroundColor: "#fff8f8"})}
`;

export const ContactItem = styled.div`
    ${tw`mb-6 flex items-center`};
`;

export const Payment = styled.img`
    ${tw`w-1/2`};
`;

