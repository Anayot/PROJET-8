import styled from "styled-components"
import Caroussel from "../components/Carrousel"
import { Link } from "react-router-dom"
import ProfilPicture from "../photo-de-profil.jpg"
import SkillCard from "../components/SkillCard"
import { useFetchSkills } from "../utils/hooks/FetchSkills"

const HomeContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    gap: 150px;
`

const Picture = styled.img`
    border-radius: 100%;
    width: 230px;
`

const AboutMe = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 29px 32px;
    width: 60%;

`

const HomeBox = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 29px 32px;
    gap: 20px;
`

const Title = styled.h1`
    margin: 0;
`

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 10px;

`


const ProjectLink = styled(Link)`
    background-color: #f3cf55;
    border-radius: 50px;
    padding: 14px 20px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
`


function HomePage() {
    const { skills } = useFetchSkills('./assets/skills.json', [])

    return (
        <HomeContainer>
            <DescriptionContainer>
                <Picture src={ProfilPicture} alt="photo de profil"/>
                <AboutMe>Description ici</AboutMe>
            </DescriptionContainer>
            <HomeBox>    
                <Title>Mes compétences</Title>
                <SkillsContainer>
                {skills.map((item) => (
                    <SkillCard 
                        title={item.title}
                        technologies={item.technologies}
                    />
                ))}
                </SkillsContainer>
            </HomeBox>
            <HomeBox>
                <Caroussel />
                <ProjectLink to="/projects">Voir mes projets</ProjectLink>
            </HomeBox>
        </HomeContainer>
    )
}

export default HomePage