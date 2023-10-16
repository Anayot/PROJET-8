import styled from "styled-components"
import { Link } from "react-router-dom"
import { MediaMobile } from "../utils/style/GlobalStyle"

const ErrorPageContainer = styled.div`
    text-align: center;
    margin: 50px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    ${MediaMobile} {
        margin: 10px;
        border-radius: 0;
    }

`

const ErrorPage = styled.p`
    font-size: 100px;
    color: #9a2b2e;
    text-shadow: black 0.1em 0.1em 0.2em;
    margin: 0;
    padding: 40px;
    ${MediaMobile} {
        padding: 0;
    }
`

const ErrorText = styled.p`
    margin: 0;
    padding: 20px;
`

const ErrorLink = styled(Link)`
    color: black;
`

function Error() {
    return (
        <ErrorPageContainer>
            <ErrorPage>404</ErrorPage>
            <ErrorText>Oups! La page que vous demandez n'existe pas</ErrorText>
            <ErrorLink to='/'>Retourner sur la page d'accueil</ErrorLink>
        </ErrorPageContainer>
    )
}

export default Error