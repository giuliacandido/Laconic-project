import styled from "styled-components";
import bgImage from '../../assets/main-page-bg.jpg'


export const MainPage = styled.article`
    width: 100%;
    height: 100dvh;
    background: url(${bgImage}) no-repeat center center / cover fixed;
    display: flex;
    align-items: center;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`
export const TextDiv = styled.div`
    color: #fff;
    z-index: 2;
    width: 75%;
    max-width: 900px;
    margin-left: 4em;
    overflow: hidden;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        padding: 2em;
    }

   
`
export const Title = styled.h1`
    font-size: 4rem;
    margin: 0.2em 0;
   
    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 540px) {
        font-size: 2rem;
        margin: 0.4em 0;
    }
`

export const Content = styled.p`
    font-size: 1.3rem;

    @media (max-width: 540px) {
        font-size: 1.3rem;
    }

    @media (max-width: 380px) {
        font-size: 1rem;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;
`

