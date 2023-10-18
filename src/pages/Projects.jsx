import styled from "styled-components"
import Card from "../components/Card"
import Filters from "../components/Filters"
import { useFetchProjects } from "../utils/hooks/FetchProjects"
import { Link } from 'react-router-dom'
import { MediaMobile } from "../utils/style/GlobalStyle"
import { useState } from "react"
import { useEffect } from "react"
import { useCallback } from "react"

const MainContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    ${MediaMobile} {
        margin: 10px;
        gap: 15px;
    }
`

const BannerImage = styled.img`
    height: 180px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    ${MediaMobile} {
        border-radius: 0;
        height: 80px;
    }
`

const FilterContainer = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 15px;
    ${MediaMobile} {
        border-radius: 0;
        padding: 10px;
    }
`

const FilterTitle = styled.h2`
    text-align: center;
    margin: 0;
    ${MediaMobile} {
        font-size: 18px;
    }
`

const CardsContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
    ${MediaMobile} {
        gap: 15px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    }
`

const CardLink = styled(Link)`
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    ${MediaMobile} {
        border-radius: 0;
       
    }
`

function Projects() {
    const { data } = useFetchProjects(process.env.PUBLIC_URL+'/assets/projets.json', [])
    const allSkills = [].concat(...data.map(item => item.technologies))
    const getUniqueValue = [...new Set(allSkills)]
    console.log('unique array', getUniqueValue)

    const [currentCat, setCurrentCat] = useState("Tous")

    const [items, setItems] = useState(data)
    console.log(data)
    
    const filterItems = useCallback((cat) => {
        if(cat === "Tous") {
            setItems(data)
        } else {
            setItems(data.filter((projet) => projet.technologies.includes(cat)))
        }
        setCurrentCat(cat)
    }, [data, setItems, setCurrentCat]) 

    useEffect(() => {
        data.forEach(item => item.pictures = item.pictures.map(p => process.env.PUBLIC_URL+p) )
        setItems(data)
    }, [data])

    return (
        <MainContainer>
            <BannerImage src={process.env.PUBLIC_URL+"/assets/photos/banner-projets.jpeg"} alt="banner"/>
            <FilterContainer>
                <FilterTitle>Les filtres</FilterTitle>
                    <Filters
                        selected={currentCat}
                        items={getUniqueValue}
                        filterItems={filterItems}
                    />                    
            </FilterContainer>
            
            <CardsContainer>
                {items.map((item, index) => (
                    <CardLink to={`./${item.id}`} key={`link-${index}-${item.id}`}>
                        <Card 
                            title={item.title}
                            cover={item.pictures[0]}
                        />
                    </CardLink>
                ))}
            </CardsContainer>
        </MainContainer>
    )
}

export default Projects