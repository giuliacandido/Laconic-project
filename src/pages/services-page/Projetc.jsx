import { Container, TextContainer, Number } from "./Project.style"
import { DefaultButton } from "../../styles/Button.style"
import {Link} from  'react-router-dom'

export default function Project() {
    return (
        <Container>
            <TextContainer>
                <Number>404</Number>
                <h1>under construction</h1>
                <p>to make things right we need some time to rebuild.</p>
                <p>if you're interest in discuss a project, please contact us:</p>
                <Link to="/contact" ><DefaultButton>contact us</DefaultButton></Link>
            </TextContainer>
        </Container>
    )
}