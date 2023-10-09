import styled from "styled-components"

const CardImage = styled.img`
    height: 200px;
    object-fit: cover;
    border: solid 2px red;
`

const CardTitle = styled.h2`
    color: black;
    padding: 10px;
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