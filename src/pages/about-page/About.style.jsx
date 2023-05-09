import styled from "styled-components";
import BgImage from '../../assets/about-background.jpg';
import { DefaultButton } from "../../styles/Button.style";
import { Link } from "react-router-dom";


export const AboutSection = styled.section`
    width: 100%;
    height: 100dvh;
    background: url(${BgImage}) no-repeat center center / cover;
    padding-left: 2em;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    display: flex;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 920px) {
        flex-direction: column;
        justify-content: center;
        padding: 0 2em;
    }

    @media (max-width: 920px) and (min-height: 1024px) {
        align-items: center;
        justify-content: center;
    }

`

export const TextBox = styled.div`

    color: #cccccc;
    text-align: left;
    padding-left: 1em;
    width: 45%;
    border-left: 2px solid #000;
    z-index: 2;
    overflow: hidden;

    @media (max-width: 920px) {
        width: 100%;
        margin-top: 6em;
    }

    @media (max-width: 540px) {
        margin-bottom: 2em;
        margin-top: 0;
    }
`

export const SubTitle = styled.h2`
    margin-bottom: 1em;

    @media (max-width: 920px) {
        font-size: 1.8rem;
        margin-bottom: 0.7em;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`

export const AboutContent = styled.p`
    font-size: 1rem;
    margin-bottom: 1em;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`

export const ButtonBox = styled.div`
    width: 100%;
    margin-top: 1em;
    display: flex;
    gap: 2em;

    @media (max-width: 920px) {
        flex-direction: column;
        gap: 0;
        margin-top: 0;
    }

    @media (max-width: 920px) and (min-height: 1024px) {
        flex-direction: row;
        gap: 2em;
    }

    @media (max-width: 600px) {
        flex-direction: row;
        gap: 1em;
    }
`

export const AboutButton = styled(DefaultButton)`
    width: 100%;

    @media (max-width: 600px) {
        font-size: 0.8rem;
        padding: 0.8em;
    }

    @media (max-width: 380px) {
        font-size: 0.6rem;
    }
`

export const AboutLink = styled(Link)`
    width: 40%;

    @media (max-width: 768px) {
        width: 30%;
    }

    @media (max-width: 920px) and (min-height: 1024px) {
        width: 40%;
    }

    @media (max-width: 540px) {
        width: 40%;
    }

`

export const ImgBox = styled.div`
    width: 50%;
    z-index: 2;

    @media (max-width: 920px) {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    
    @media (max-width: 920px) and (min-height: 1024px) {
        position: static;
        width: 100%;
        margin-top: 2em;
    }

    @media (max-width: 768px) {
        bottom: 1em;
    }


     @media (max-width: 600px) {
        position: initial;
        width: 70%;
    } 

    @media (max-width: 380px) {
        display: none;
    } 
`

export const StyledImg = styled.img`
    width: 100%;
    max-width: 550px;

    @media (max-width: 600px) {
        max-width: 360px;

    }
`

