import styled from "styled-components"
import ContactForm from "../components/ContactForm"


const FooterContainer = styled.div`
    background-color: #9a2b2e;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px;
`


function Footer() {
    return (
        <FooterContainer>
            <ContactForm />
        </FooterContainer>
    )
}

export default Footer