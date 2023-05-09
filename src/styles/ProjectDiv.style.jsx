import styled from "styled-components";
import ArchPjt from '../assets/pexels-john-lee.jpg'
import FurniturePjt from '../assets/closet-interior.png'
import InteriorPjt from '../assets/kitchen-interior.jpg'

export const ProjectBox1 = styled.div`
    margin-top: 5em;
    width: 100%;
    height: 100dvh;
    background: url(${ArchPjt}) no-repeat center center / cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1em;

    @media (max-width: 768px) {
        height: 40dvh;
        margin-top: 0;
    }
`

export const ProjectBox2 = styled(ProjectBox1)`
    background: url(${FurniturePjt}) no-repeat center center / cover;
`

export const ProjectBox3 = styled(ProjectBox1)`
    background: url(${InteriorPjt}) no-repeat center center / cover;
`