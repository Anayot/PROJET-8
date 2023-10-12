import styled from "styled-components"
import Caroussel from "../components/Carrousel"
import { Link } from "react-router-dom"
import ProfilPicture from "../photo-de-profil.jpg"
import SkillCard from "../components/SkillCard"
import { useFetchSkills } from "../utils/hooks/FetchSkills"
import { useFetchProjects } from "../utils/hooks/FetchProjects"
import { MediaMobile, MediaTablet } from "../utils/style/GlobalStyle"

const HomeContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    ${MediaMobile} {
        margin: 10px;
        gap: 15px;
    }
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;

    ${MediaMobile} {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`

const PictureContainer = styled.div`
    border-radius: 10px;
    width: 50%;
    background-image: url("./assets/photos/banner-projets.jpeg");
    ${MediaMobile} {
        width: 100%;
        height: 125px;
        border-radius: 0;
    }
`

const Picture = styled.img`
    border-radius: 50%;
    width: 200px;
    aspect-ratio: 1/1;
    object-fit: cover;
    padding: 50px 100px;
    ${MediaTablet} {
        padding: 50px;
    }
    ${MediaMobile} {
        width: 100px;
        padding: 15px;
        
    }
`

const AboutMe = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 29px 32px;
    & h2 {
        margin: 0;
        text-align: center;
    }
    ${MediaMobile} {
        font-size: 12px;
        border-radius: 0;
    }
`

const HomeBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${MediaMobile} {
        flex-direction: column-reverse;
        gap: 15px;
    }
`

const SkillsContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 29px 32px;
    gap: 20px;
    ${MediaMobile} {
        border-radius: 0;
    }
`

const SkillsTitle = styled.h2`
    margin: 0;
    ${MediaMobile} {
        font-size: 18px;
    }
`

const SkillsCards = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    ${MediaMobile} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

`

const CarrouselContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 29px 32px;
    gap: 20px;
    ${MediaMobile} {
        border-radius: 0;
        padding: 10px;
        gap: 10px;
    }
`

const ProjectLink = styled(Link)`
    background-color: #4C5699;
    border-radius: 50px;
    padding: 14px 20px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    ${MediaMobile} {
        font-size: 12px;
        padding: 7px 13px;
    }
`


function HomePage() {
    const { skills } = useFetchSkills('./assets/skills.json', [])
    const { data } = useFetchProjects('./assets/projets.json', [])

    return (
        <HomeContainer>
            <DescriptionContainer>
                <PictureContainer>
                    <Picture src={ProfilPicture} alt="photo de profil"/>
                </PictureContainer>
                <AboutMe>
                    <h2>Développeuse Web</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </AboutMe>
            </DescriptionContainer>
            <HomeBox>
                <SkillsContainer>    
                    <SkillsTitle>Mes compétences</SkillsTitle>
                    <SkillsCards>
                    {skills.map((item) => (
                        <SkillCard 
                            title={item.title}
                            skills={item.technologies}
                        />
                    ))}
                    </SkillsCards>
                </SkillsContainer>
                <CarrouselContainer>
                    <Caroussel pictures={data.map((item)=> item.cover[0])}/>
                    <ProjectLink to="/projects">Voir mes projets</ProjectLink>
                </CarrouselContainer>
            </HomeBox>
        </HomeContainer>
    )
}

export default HomePage