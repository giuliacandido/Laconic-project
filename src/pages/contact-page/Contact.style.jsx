import styled from "styled-components";

export const ContactSection = styled.section`
    background-color: #252525;
    width: 100%;
    height: 100dvh;
    padding-top: 5em;
    position: relative;
    
`
export const FormContainer = styled.div`
    width: 40%;
    max-width: 480px;
    height: auto;
    background-color: #fff;
    position: absolute;
    top: 5em;
    right: 3em;
    padding: 0.6em;
    z-index: 2;

    @media (max-width: 920px) {
        width: 50%;
        right: 0;
    }

    @media (max-width: 560px) {
        position: initial;
        width: 100%;
        max-width: 100%;
        
    }
`


export const MapContainer = styled.div`
    background-color: #cccccc;
    width: 100%;
    height: 80%;

    @media (max-width: 560px) {
        height: 65%;
    }
`

export const InfoContainer = styled.div`
    background-color: #252525;
    padding-left: 4em;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: flex-start;
    gap: 6em;

    @media (max-width: 1024px) {
        gap: 3em;
        padding-left: 1em;
    }

    /* @media (max-width: 700px) {
        flex-direction: column;
        gap: 0em;
        width: 50%;
    } */

    @media (max-width: 560px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 1em 2.5em;
    }

    @media (max-width: 380px) {
        padding: 1em;
    }

`

export const InfoDiv = styled.div`
    color: #cccccc;
    margin-top: 0.8em;

    @media (max-width: 920px) {
        font-size: 0.8rem;
    }

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }

    @media (max-width: 700px) {
        font-size: 0.6rem;
    }

    @media (max-width: 380px) {
        font-size: 0.5rem;
    }
`

export const Paragraph = styled.p`
    color: #fff;
    text-align: center;
    text-transform: uppercase;
`
