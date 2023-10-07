import styled from "styled-components"

const CardContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 450px;
    height: 450px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;;
`

function Card() {
    return (
        <CardContainer>
            <img alt="photo du projet" src="" />
            <h1>Titre du projet</h1>

        </CardContainer>
    )
}

export default Card