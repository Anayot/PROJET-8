import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MediaMobile } from "../utils/style/GlobalStyle"


const HeaderContainer = styled.div`
    background-color: #9a2b2e;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const MenuHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin: 35px 150px;
    font-size: 20px;
    ${MediaMobile} {
        margin: 20px
    }
`

const StyleLink = styled(Link)`
    color: white;
    text-decoration: none;
    &: hover,
    &: active {
        color: #f3cf55;
    }
    ${MediaMobile} {
        font-size: 12px;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <MenuHeader>
                <StyleLink to="/" className="nav-link">A propos</StyleLink>
                <StyleLink to="/" className="nav-link">Mes compétences</StyleLink>
                <StyleLink to="/projects" className="nav-link">Mes projets</StyleLink>
                <StyleLink to="/" className="nav-link">Contact</StyleLink>
            </MenuHeader>
        </HeaderContainer>
    )
}

export default Header