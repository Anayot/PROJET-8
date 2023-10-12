import styled from "styled-components"
import Ratings from "./Ratings"
import { MediaMobile, MediaTablet } from "../utils/style/GlobalStyle"

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    gap: 10px;
`

const SkillTitle = styled.h2`
    margin: 0;
    text-align: center;
    ${MediaMobile} {
        font-size: 14px;
    }
`

const Skill = styled.div`
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 100%;
    ${MediaMobile} {
        font-size: 12px;
        padding: 0 5px;
        width: 90%;
    }
`

const SkillItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    ${MediaTablet} {
        width: 130%;
    }
    ${MediaMobile} {
        width: 100%
    }
`

function SkillCard({title, skills}) {

    return (
        <SkillContainer>
            <SkillTitle>{title}</SkillTitle>
            <Skill>
                {skills.map((skill, index) => 
                    <SkillItem key={`skill-${index}-${skill}`}>
                        {skill.name} {<Ratings rating={skill.rating}/>}
                    </SkillItem>
                )}
            </Skill>

        </SkillContainer>
    )
}

export default SkillCard