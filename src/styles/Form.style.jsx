import styled from "styled-components";
import { DefaultButton } from "./Button.style";

export const FormCamp = styled.form`
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputField = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 0.7em 0;
    position: relative;

    @media (max-width: 560px) {
        margin: 0.5em 0;
        width: 80%;
    }

    @media (max-width: 450px) {
        width: 100%;
    }
`
export const DefaultLabel = styled.label`
    color: black;
    font-size: 0.8rem;
    font-weight: bold;

    @media (max-width: 560px) {
        font-size: 0.7rem;
    }

`

export const DefaultInput = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid #252525;
    padding: 0.4em 0;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;

    @media (max-width: 350px) {
        padding: 0.2em 0;
    }
`

export const FormTitle = styled.h3`
    text-align: center;

    @media (max-width: 430px) {
        font-size: 0.9rem;
    }

    @media (max-width: 350px) {
        font-size: 0.8em;
    }

`

export const FormP = styled.p`
    text-align: center;

    @media (max-width: 560px) {
        font-size: 0.8rem;
    }

    @media (max-width: 430px) {
        font-size: 0.7rem;
    }

    @media (max-width: 350px) {
        font-size: 0.55em;
    }
`

export const MessageArea = styled.textarea`
    border: 1px solid #252525;
    font-family: 'Poppins', sans-serif;

    &::placeholder {
        font-family: 'Poppins', sans-serif;
        font-size: 0.75rem;
    }
`

export const FormButton = styled(DefaultButton)`
    margin-top: 1em;
    padding: 1em;
    border: 2px solid #252525;
    color: #252525;
    font-weight: bolder;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: #252525;
        z-index: -1;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease-in-out;
    }

    &:hover::before {
        transform: scaleX(1);
    }

    &:hover {
        transition: all 0.8s ease;
        color: #fff; 
    }

    @media (max-width: 560px) {
        width: 30%;
        padding: 0.8em;
    }

    @media (max-width: 350px) {
        width: 50%;
        padding: 0.5em;
    }
`
export const ErrorMessage = styled.small`
    color: red;
    font-size: 0.7rem;
    font-weight: bold;
    margin: 0;
    position: absolute;
    left: 0em;
    bottom: -1.5em;
`
