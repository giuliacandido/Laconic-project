import styled from "styled-components";

export const DefaultButton = styled.button`
    margin-top: 2em;
    border: 2px solid #cccccc;
    background-color: transparent;
    width: 50%;
    padding: 1.3em 1em;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 2;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: #cccccc39;
        z-index: -1;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease-in-out;
    }

    &:hover::before {
        transform: scaleX(1);
    }

    &:hover {
        color: #fff;
        
    }

    @media (max-width: 380px) {
        width: 90%;
    }

`
