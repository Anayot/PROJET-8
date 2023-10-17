import { createGlobalStyle } from "styled-components"

export const MediaTablet = "@media (max-width: 1024px)"
export const MediaMobile = "@media (max-width: 768px)"

const GlobalStyled = createGlobalStyle`
    * {
        font-family: "Work Sans", sans-serif;
    }

    body {
        margin: 0;
        background-color: #f2d6b3; 
    }
    h1, h2, h3 {
        font-family: 'Syne', sans-serif;
    }
`

function GlobalStyle () {
    return (
        <GlobalStyled />
    )
}

export default GlobalStyle

