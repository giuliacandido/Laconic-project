import { ServicesSection, Title, Content, ServicesInfo, ServicesContainer, ServiceBox, StyledIcon, ProjectsContainer, ProjectP,
ProjectDiv, ProjectsTitle} from "./Services.style"
import Button from '../../components/Button'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { serviceBoxAnimation, pageTransition } from "../../animations/allAnimations"
import { services } from "../../serviceBoxData"
import { projectContent } from "../../projectBoxData"

export default function Services() {

    return (
        <ServicesSection as={motion.div} variants={pageTransition} initial="hidden" animate="show" exit="exit">
            <ServicesInfo>
                <Title>Services we provide</Title>
                <ServicesContainer as={motion.div} variants={serviceBoxAnimation} initial="hidden" animate="show">
                    {services.map((item) => {
                        return (
                        <ServiceBox key={item.id} as={motion.div} variants={serviceBoxAnimation}>
                            <StyledIcon icon={item.icon} />
                            <Content>{item.title}</Content>
                            <Content>{item.content}</Content>
                        </ServiceBox>
                        )
                    })}
                </ServicesContainer>
            </ServicesInfo>

            <ProjectsContainer as={motion.div}>
                <ProjectsTitle>See our projects</ProjectsTitle>
                {projectContent.map((item) => {
                    return (
                        <ProjectDiv key={item.id} className={item.className} as={motion.div}>
                            <ProjectP>{item.content}</ProjectP>
                            <ProjectP>projects</ProjectP>
                            <Link to="/services/project"><Button>see project</Button></Link>
                        </ProjectDiv>
                    )
                })}
            </ProjectsContainer>
        </ServicesSection>
    )
}