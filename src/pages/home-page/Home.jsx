import { MainPage, TextDiv, Title, Content, ButtonContainer } from "./Home.style";
import Button from "../../components/Button";
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import { pageTransition, textAnimation } from "../../animations/allAnimations";

export default function Home() {
    return (
        <MainPage as={motion.div} variants={pageTransition} initial="hidden" animate="show" exit="exit">
            <TextDiv as={motion.div} variants={textAnimation} initial="hidden" animate="show">
                <Content as={motion.p} variants={textAnimation}>
                    Welcome to Laconic architects and interior design
                </Content>

                <Title as={motion.h1}variants={textAnimation}>Design & Construction</Title>

                <Content as={motion.p} variants={textAnimation}>
                    Laconic is an architectural practice based in Canada. We have extensive experience
                    working with luxury buildings, furnitures and interior design. All in one place.
                </Content>

                <ButtonContainer as={motion.div} variants={textAnimation}>
                    <Link to='/about'><Button>Learn more</Button></Link>
                </ButtonContainer>
                
            </TextDiv>
        </MainPage>
    )
}