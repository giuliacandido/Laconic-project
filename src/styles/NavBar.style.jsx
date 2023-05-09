import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { StyledIcon } from '../pages/services-page/Services.style';

export const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 1500px;
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    overflow: hidden;

    @media (min-width: 1500px) {
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 560px) {
        padding: 1em;
    }

    @media (max-width: 320px) {
        padding: 1em 0.50em;
    }
`

export const Logo = styled.div`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;

    @media (max-width: 560px) {
        font-size: 1.8rem;
    }

`
export const LinksContainer = styled.div`
    
    @media (max-width: 600px) {
        display: none;
    }
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #cccccc;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 2em;

    
    &.active {
        color: #fff;
        border: 1px solid #fff;
        border-radius: 1em;
        padding: 1em;
    }

    @media (max-width: 560px) {
        font-size: 0.75rem;
    }

    @media (max-width: 380px) {
        font-size: 0.7rem;
    }

    @media (max-width: 320px) {
        font-size: 0.6rem;
    }
`


export const HiddenLinks = styled.nav`
    font-size: 1.6rem;
`

export const MobileButton = styled.button`
    color: #fff;
    background-color: transparent;
    border: none;
    font-weight: bolder;
    display: none;
    float: right;
    cursor: pointer;

    @media (max-width: 600px){
        display: block;
    }

`
export const NavIcon = styled(StyledIcon)`
    transform: translateX(0);
`