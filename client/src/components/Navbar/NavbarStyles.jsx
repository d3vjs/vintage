import styled from 'styled-components';
import tw from 'twin.macro';
import { SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import {mobile} from '../../breakpoints';

export const Container = styled.div`
    height: 60px;

    ${mobile({height: '50px'})}
`;

export const Wrapper = styled.div`
    padding: 10px 20px;
    ${tw`flex justify-between items-center`}
    ${mobile({padding: '10px 0px'})}
`;

export const Left = styled.div`
    ${tw`flex-1 flex items-center`}
`;

export const SearchContainer = styled.div`
    ${tw`border border-solid border-gray-400 flex items-center
        ml-6 p-2
    `}
`;

export const InputSearchIcon = styled(SearchIcon)`
    ${tw`h-6 w-6 text-gray-400`}
`;

export const Input = styled.input`
    ${tw`border-none outline-none`}
    ${mobile({width: '50px'})}
`;

export const Center = styled.div`
    ${tw`flex-1`}
`;

export const Logo = styled.h1`
 ${tw`font-bold text-center text-2xl`}
 ${mobile({fontSize: '24px'})}
`;

export const Right = styled.div`
    ${tw`flex-1 flex items-center justify-end`}
    ${mobile({flex: 2, justifyContent: 'center'})}
`;

export const MenuItem = styled.div`
    ${tw`text-sm cursor-pointer mx-6`}
    ${mobile({fontSize: '12px', marginLeft: '10px'})}
`;

export const CartWBadge = styled.span`
    ${tw`relative inline-block`}
`;

export const CartIcon = styled(ShoppingBagIcon)`
    ${tw`h-6 w-6`}
`;

export const CartBage = styled.span`
    ${tw`absolute bottom-3 left-4 inline-flex items-center justify-center px-2 py-1 text-base font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full`}
`;

export const Language = styled.span`
    ${tw`text-sm cursor-pointer`}
    ${mobile({display: 'none'})}
`;