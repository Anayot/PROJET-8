import styled from 'styled-components'
import { HashLink as NavLink } from 'react-router-hash-link'
import { MediaMobile } from "../utils/style/GlobalStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'


const HeaderContainer = styled.nav`
    background-color: #9a2b2e;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    ${MediaMobile} {
        flex-direction: column;
        align-items: end;
    }
`

const BurgerIcon = styled(FontAwesomeIcon)`
    display: none;
    color: white;
    font-size: 30px;
    width: 30px;
    margin: 10px 20px;
    ${MediaMobile} {
        display: flex;
        
    }
`

const MenuHeader = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin: 35px;
    font-size: 20px;
    & li {
        list-style: none;
    }
    ${MediaMobile} {
        margin: 0;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin: 0 0 5px 0;
    }
`

const StyleLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    &: hover,
    &: focus {
        color: #f3cf55;
    }
    ${MediaMobile} {
        font-size: 14px;
        &: hover,
    &: focus {
        color: #f3cf55;
    }
    }
`


function Header() {
    const [menuOpen, setMenuOpen] = useState(true)
    const burgerMenu = () => {
        if(!menuOpen) {
            setMenuOpen(true)
        } else {
            setMenuOpen(false)
        }
    }
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    
    const onResize = useCallback((e) => {
        setIsMobile(window.innerWidth < 768)
        console.log(window.innerWidth)
    }, [setIsMobile])
    
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return (
            () => {window.removeEventListener('resize', onResize)}
            )
        }, [onResize])
        
        console.log(menuOpen, isMobile)
    return (
        <HeaderContainer>
            <BurgerIcon onClick={burgerMenu} icon={faBars}/>
            {(menuOpen || (!isMobile)) && 
                <MenuHeader>
                    <li><StyleLink to="/" >A propos</StyleLink></li>
                    <li><StyleLink to="/#skills" >Mes compétences</StyleLink></li>
                    <li><StyleLink to="/projects" >Mes projets</StyleLink></li>
                    <li><StyleLink to="/#contact" >Contact</StyleLink></li>
                </MenuHeader>
            }
        </HeaderContainer>
    )
}

export default Header