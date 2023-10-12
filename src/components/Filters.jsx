import styled from "styled-components"
import { MediaMobile, MediaTablet } from "../utils/style/GlobalStyle"

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 20px;
    ${MediaMobile} {
        gap: 10px;
        padding: 5px;
        justify-content: center;
    }
`

const Filter = styled.div`
    background-color: #4C5699;
    border-radius: 50px;
    padding: 5px 20px;
    color: white;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    ${MediaTablet} {
        font-size: 16px;
    }
    ${MediaMobile} {
        font-size: 12px;
    }
`

function Filters({items}) {

    return (
        <FilterContainer>
            <Filter>Tous</Filter>
            {items.map(item => (
                <Filter key={item}>{item}</Filter>
            ))}

        </FilterContainer>
    )

}

export default Filters