import { AboutSection, TextBox, SubTitle, AboutContent, ButtonBox, AboutLink, AboutButton, ImgBox, StyledImg } from "./About.style"
import Image from '../../assets/about-aside-img.png'
import {motion} from 'framer-motion'
import { imgAnimation, aboutAnimation, pageTransition } from "../../animations/allAnimations"


export default function About() {
    return (
        <AboutSection as={motion.div} variants={pageTransition} initial="hidden" animate="show" exit="exit">
            <TextBox as={motion.div} variants={aboutAnimation} initial="hidden" animate="show">
                <SubTitle as={motion.h2} variants={aboutAnimation}>who we are</SubTitle>

                <AboutContent as={motion.p} variants={aboutAnimation}>
                    An award-wining design and development team that is proud of our work.
                </AboutContent>

                <AboutContent as={motion.p} variants={aboutAnimation}>
                    We use an agile approach to test assumptions and connect with the needs to our audience early and often.
                    Turning ideas into works of art, we have extensive experience ans specializaton in architecture, furniture
                    design and interior planning. Technology enables great experiences.
                    Minimalism at its finest. We belive less is more, specially when it comes to modern luxury interior 
                    designs and furniture. 
                </AboutContent>

                <ButtonBox as={motion.div} variants={aboutAnimation}>
                    <AboutLink to='/services'><AboutButton>See services</AboutButton></AboutLink>
                    <AboutLink to='/contact'><AboutButton>Start project</AboutButton></AboutLink>
                </ButtonBox>
            </TextBox>

            <ImgBox as={motion.div} variants={imgAnimation} initial="hidden" animate="show">
                <StyledImg src={Image}></StyledImg>
            </ImgBox>
           
        </AboutSection>
    )
}