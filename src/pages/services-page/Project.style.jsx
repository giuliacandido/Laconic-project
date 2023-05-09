import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: #252525;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Number = styled.h1`
    color: #fff;
    font-size: 4rem;
`

export const TextContainer = styled.div`
    background-color: #252525;
    color: #fff;
    text-align: center;

    @media (max-width: 540px) {
        font-size: 0.7rem;
    }
`
