import styled from "styled-components"
import Caroussel from "../components/Carrousel"
import { Link } from "react-router-dom"
import SkillCard from "../components/SkillCard"
import { useFetchSkills } from "../utils/hooks/FetchSkills"
import { useFetchProjects } from "../utils/hooks/FetchProjects"
import { MediaMobile, MediaTablet } from "../utils/style/GlobalStyle"
import { useEffect } from "react"

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
    background-image: url(${process.env.PUBLIC_URL+"/assets/photos/banner-projets.jpeg"});
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
    const { skills } = useFetchSkills(process.env.PUBLIC_URL+'/assets/skills.json', [])
    const { data } = useFetchProjects(process.env.PUBLIC_URL+'/assets/projets.json', [])

    useEffect(() => {
        data.forEach(item => item.cover = item.cover.map(p => process.env.PUBLIC_URL+p) )
        console.log("process", process.env.PUBLIC_URL)
    }, [data])  

    return (
        <HomeContainer>
            <DescriptionContainer>
                <PictureContainer>
                    <Picture src={process.env.PUBLIC_URL+"/assets/photos/photo-de-profil.jpg"} alt="photo de profil"/>
                </PictureContainer>
                <AboutMe>
                    <h2>Développeuse Web</h2>
                    <p>Cela fait maintenant 5 ans que le monde de l’IT n’a plus de secret pour moi (ou presque). En tant qu’ingénieur commercial, j’ai pu échanger avec de nombreux consultants en particulier des développeurs.</p>
                    <p>De nature assez curieuse, je me suis toujours intéressée aux métiers de chacun et un jour je me suis dit « Pourquoi pas moi ? ».</p>
                    <p>Comme il faut bien commencer quelque part, je me suis tournée vers une formation de développement web.</p>
                </AboutMe> 
            </DescriptionContainer>
            <HomeBox>
                <SkillsContainer>    
                    <SkillsTitle id="skills">Mes compétences</SkillsTitle>
                    <SkillsCards>
                    {skills.map((item) => (
                        <SkillCard key={item.title}
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