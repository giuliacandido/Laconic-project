import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArchPjt from '../../assets/arch-building.jpg'
import FurniturePjt from '../../assets/furniture-design.png'
import InteriorPjt from '../../assets/interior-design.jpg'

export const ServicesSection = styled.section `
    background-color: #252525;
    color: #000;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    color: #fff;
    font-size: 2rem;
    margin-top: 3em;

    @media screen and (max-width: 980px) {
        text-align: center;
        margin-bottom: 0.8em;
    }

`

export const ProjectsTitle = styled(Title)`
    margin-top: 0;
    position: absolute;
    top: 1em;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 550px) {
        font-size: 1.8rem;
        top: 0;
    }
    
`

export const Content = styled.p`
    font-size: 0.9rem;
    color: #cccccc;
    margin-top: 1em;
`

export const ProjectP = styled(Content)`
    margin-top: 0;
    z-index: 2;
    font-size: 1rem;
`

export const ServicesInfo = styled.div`
    width: 100%;
    height: 80dvh;
    display: flex;
    flex-direction: column;
    gap: 4em;
    justify-content: space-between;
    padding: 0 2em;
    background-color: #535252;
    position: relative;

    @media (max-width: 1080px) {
        padding-bottom: 4em;
    }

    @media (max-width: 980px) {
        height: auto;
        justify-content: space-between;
        gap: 1em;
    }

    /* @media (max-width: 560px) {
        height: auto;
    } */
`

export const ServicesContainer = styled.div`
    width: 100%;
    height: 65%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;

    @media (max-width:1080px) {
        align-items: stretch;
    }

    @media (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        height: 100%;
        padding-bottom: 2em;
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`

export const ServiceBox = styled.div`
    background-color: #252525;
    color: #fff;
    width: 100%;
    max-width: 280px;
    aspect-ratio: 1/1;
    border: 2px solid #5a5959;
    display: flex;
    flex-direction: column;
   
    padding: 1.5em;
    position: relative;

    @media (max-width: 980px) {
        max-width: 250px;
    }
`

export const ProjectsContainer = styled.div`
    margin-top: 1em;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    position: relative;
    padding-top: 4em;

    @media (max-width: 980px) {
        flex-direction: column;
        padding-top: 8em;
    }
    
`

export const ProjectDiv = styled.div`
    margin-top: 5em;
    width: 100%;
    height: 100dvh;
    background-color: #cccccc;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1em;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 980px) {
        margin-top: 0;
        height: 60dvh;
    }

    &.project-1 {
        background: url(${ArchPjt}) no-repeat center center / cover;
    }

    &.project-2 {
        background: url(${FurniturePjt}) no-repeat center center / cover;
    }

    &.project-3 {
        background: url(${InteriorPjt}) no-repeat center center / cover;
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 1.5rem;
    transform: translateX(-45%);

`

