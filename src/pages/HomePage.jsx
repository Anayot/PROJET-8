import styled from "styled-components"
import Caroussel from "../components/Carrousel"
import { Link } from "react-router-dom"
import SkillCard from "../components/SkillCard"
import { useFetchSkills } from "../utils/hooks/FetchSkills"
import { useFetchProjects } from "../utils/hooks/FetchProjects"
import { MediaMobile, MediaTablet } from "../utils/style/GlobalStyle"
import { useEffect } from "react"
import { useState } from "react"

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
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 15px;

    ${MediaMobile} {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`

const PictureContainer = styled.div`
    border-radius: 10px;
    background-image: url(${process.env.PUBLIC_URL+"/assets/photos/banner-projets.jpeg"});
    background-size: cover;
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
    padding: 100px 100px;
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
        flex-wrap: wrap;
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
    background-color: #3b91bc;
    border-radius: 50px;
    padding: 5px 20px;
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
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        setPictures(data.map(item => process.env.PUBLIC_URL+item.pictures[0]))
    }, [data])  

    return (
        <HomeContainer>
            <DescriptionContainer>
                <PictureContainer>
                    <Picture src={process.env.PUBLIC_URL+"/assets/photos/photo-de-profil.jpg"} alt="photo de profil"/>
                </PictureContainer>
                <AboutMe>
                    <h2>Développeuse Web</h2>
                    <p>Durant ces cinq dernières années, j'ai plongé de manière progressive dans le monde de l'informatique. En tant qu'ingénieur commercial, mon rôle m'a permis d'entrer en contact avec de nombreux consultants, dont bon nombre de développeurs. Mon insatiable curiosité m'a toujours poussée à explorer en profondeur les diverses facettes de leurs métiers.</p>
                    <p>Au fil du temps, une question m'est venue : "Pourquoi pas moi ?". C'est ainsi que j'ai pris la décision de me lancer dans une formation en développement web. Cette transition, quoique tardive, a été le fruit d’un intérêt grandissant pour l'informatique. Mon désir d'acquérir de nouvelles compétences et de contribuer de manière plus active à ce domaine en constante évolution a été le moteur de ma décision.</p>
                    <p>Ma carrière d'ingénieur commercial m'a doté de compétences en communication, en négociation et en gestion de projet, que je suis impatiente d'appliquer dans le monde du développement web. J'ai appris à travailler en équipe, à comprendre les besoins des clients et à trouver des solutions adaptées à leurs exigences. Je suis convaincu que ces compétences seront des atouts précieux dans mon parcours de développeuse.</p>
                    <p>Ce nouveau chapitre de ma vie est pour moi synonyme d'apprentissage, d'exploration et de croissance personnelle. Je suis persuadée que tout commence quelque part, et j'ai hâte de relever les défis qui se présenteront à moi et de contribuer au développement de solutions informatiques innovantes."</p>
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
                    <Caroussel pictures={pictures}/>
                    <ProjectLink to="/projects">Voir mes projets</ProjectLink>
                </CarrouselContainer>
            </HomeBox>
        </HomeContainer>
    )
}

export default HomePage