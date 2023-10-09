import styled from "styled-components"
import Ratings from "./Ratings"


const Skills = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    gap: 10px;
`

const SkillTitle = styled.h2`
    margin: 0;
    text-align: center;
`

const Skill = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

function SkillCard({title, technologies}) {

    return (
        <Skills>
            <SkillTitle>{title}</SkillTitle>
            <Skill>
                <div>{technologies.name}</div>
                <div>{technologies.map((technologie) => 
                    <div key={technologie}>
                        {technologie.name} - {<Ratings rating={technologie.rating}/>}
                    </div>
                )}
                </div>
                
            </Skill>

        </Skills>
    )
}

export default SkillCard