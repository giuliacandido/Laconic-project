import { ContactSection, Paragraph, MapContainer, InfoContainer, FormContainer, InfoDiv } from "./Contact.style"
import Form from "../../components/Form"
import { useJsApiLoader } from '@react-google-maps/api';
import Map from "../../components/Map";
import {motion} from 'framer-motion'
import { imgAnimation, pageTransition } from "../../animations/allAnimations";

// import.meta.env.VITE_API_KEY


export default function Contact() {
    const { isLoaded } = useJsApiLoader({
        id: '38d3d465d83e285a',
        googleMapsApiKey: import.meta.env.VITE_API_KEY
      })

    return (
        <ContactSection as={motion.div} variants={pageTransition} initial="hidden" animate="show" exit="exit">
            <FormContainer>
                <Form />
            </FormContainer>
            <MapContainer>
                {isLoaded ? (<Map />) : <h1>Sorry, Google Maps couldn't load</h1>}
            </MapContainer>
            <InfoContainer>
                <InfoDiv>
                    <h4>Our Address</h4>
                    <p>44-12 Somerset St W</p>
                    <p>Ottawa</p>
                </InfoDiv>
                <InfoDiv>
                    <h4>Our Contacts</h4>
                    <p>laconicprojects@gmail.com</p>
                    <p>+1 780-484-9120</p>
                </InfoDiv>
            </InfoContainer>
            
        </ContactSection>
    )
}