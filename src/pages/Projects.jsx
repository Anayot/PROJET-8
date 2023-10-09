import styled from "styled-components"
import Card from "../components/Card"
import { useFetchProjects } from "../utils/hooks/FetchProjects"
import { Link } from 'react-router-dom'

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

const CardLink = styled(Link)`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 450px;
    padding: 20px;
    border-radius: 10px;
    text-decoration: none;
`

function Projects() {
    const { data } = useFetchProjects('./assets/projets.json', [])


    return (
        <MainContainer>
            <FilterContainer>
                <h1>Les filtres</h1>
            </FilterContainer>
            <CardsContainer>
                {data.map((item) => (
                    <CardLink to={`./projects/${item.id}`} key={`${item.id}`}>
                        <Card 
                            title={item.title}
                            cover={item.cover}
                        />
                    </CardLink>
                ))}
            </CardsContainer>
        </MainContainer>
    )
}

export default Projects