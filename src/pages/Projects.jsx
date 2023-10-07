import styled from "styled-components"
import Card from "../components/Card"

const MainContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const FilterContainer = styled.div`
    background-color: white;
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
`


function Projects() {
    return (
        <MainContainer>
            <FilterContainer>
                <h1>Les filtres</h1>
            </FilterContainer>
            <CardsContainer>
                <Card />
                <Card />
                <Card />
            </CardsContainer>
        </MainContainer>
    )
}

export default Projects