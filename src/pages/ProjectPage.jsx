import { useNavigate, useParams } from "react-router-dom"
import { useFetchProjects } from "../utils/hooks/FetchProjects"
import { useState, useEffect } from "react"
import Carrousel from "../components/Carrousel"
import styled from "styled-components"

const ProjectContainer = styled.div`
    margin: 50px;
    background-color: white;
    border-radius: 10px;
    padding: 40px;
`

const ProjectInformation = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

const ProjectDetail = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

`

const Skills = styled.div`
    display: flex;
    flex-direction : row;
    flex-wrap: wrap;
    gap: 10px;
`

const Skill = styled.div`
    background-color: rgb(76 86 153);
    border-radius: 50px;
    text-align: center;
    padding: 5px 10px;
    color: white;
`

const Link = styled.a`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    & img {
        width: 40px;
    }
`

function ProjectPage() {
    const id = useParams().id
    const {data} = useFetchProjects('../assets/projets.json', [])
    const [project, setProject] = useState(null)
    const navigate = useNavigate()
    console.log(data)

    useEffect(() => {
        const loc = data.find(item => item.id === id)
        if(data.length > 0 && !loc) {
            return
        }
        setProject(loc)

    }, [data, setProject, id, navigate])

    return (
        <>
        {project && (
            <ProjectContainer>
                <Carrousel pictures={project.cover}/>
                <h1>{project.title}</h1>
                <ProjectInformation>
                    <ProjectDetail>
                        <h2>Description</h2>
                        <div>{project.description}</div>
                    </ProjectDetail>
                    <ProjectDetail>
                        <h2>Technologies</h2>
                        <Skills>{project.technologies.map((technologie, index) => <Skill key={`skills-${index}-${technologie}`}>{technologie}</Skill> )}</Skills>
                    </ProjectDetail>
                </ProjectInformation>
                <Link href={project.github} target="blank"><img src="../assets/photos/logo-github.png" alt="lien github"/></Link>
            </ProjectContainer>


        )}
        </>
    )
}

export default ProjectPage