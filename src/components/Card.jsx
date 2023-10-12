import styled from "styled-components"
import { MediaMobile, MediaTablet } from "../utils/style/GlobalStyle"

const CardImage = styled.img`
    width: 100%;
    height: 220px;
    object-fit: fit;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    ${MediaMobile} {
        border-radius: 0;
        height: 160px;
    }
`

const CardTitle = styled.h2`
    color: black;
    padding: 10px;
    ${MediaTablet} {
        font-size: 22px;
    }
    ${MediaMobile} {
        font-size: 18px;
    }
`

function Card({title, cover}) {
    return (
        <>
            <CardImage alt="photo du projet" src={cover} />
            <CardTitle>{title}</CardTitle>

        </>
    )
}

export default Card