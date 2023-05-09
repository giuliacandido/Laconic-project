import { HeaderContainer, LinksContainer, StyledLink, HiddenLinks, MobileButton, Logo, NavIcon} from '../styles/NavBar.style';
import { useState } from 'react';
import { faXmark, faBars} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'

export default function NavBar() {
    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setMobileNavbar(false);
        console.log('clicou')
    }

    // const testeClick = (navLink) => {
    //     navLink.forEach((link) => {
    //         setIsClicked(!isClicked);
    //         setMobileNavbar(false);
    //     })
    // }
    
    return (
        <HeaderContainer>
            {!mobileNavbar && (<Logo as={motion.div} 
            initial={{x:-100, opacity:0}} 
            animate={{x:0, opacity:1}}
            transition={{duration: 1, delay: 0.5}}
            >Laconic</Logo>)}

            {mobileNavbar && (<HiddenLinks>
                <StyledLink to="/" onClick={handleClick}>Home</StyledLink>
                <StyledLink to="/about" onClick={handleClick}>About</StyledLink>
                <StyledLink to="/services" onClick={handleClick}>Services</StyledLink>
                <StyledLink to="/contact" onClick={handleClick}>Contact</StyledLink> 
            </HiddenLinks>)}
            
            <nav>
                <MobileButton onClick={() => {
                    setMobileNavbar(!mobileNavbar);
                }}>{mobileNavbar ? <NavIcon icon={faXmark} /> : <NavIcon icon={faBars} />}
                </MobileButton>

                <LinksContainer as={motion.div}
                initial={{x:180, opacity:0}} 
                animate={{x:0, opacity:1}}
                transition={{duration: 1.3}}>
                    <StyledLink to="Laconic-project">Home</StyledLink>
                    <StyledLink to="/about">About</StyledLink>
                    <StyledLink to="/services">Services</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink> 
                </LinksContainer>
            </nav>
        </HeaderContainer>
    )
}