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
    background-color: #3b91bc;
    border-radius: 50px;
    padding: 5px 20px;
    color: white;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    &.selected {
        background-color: white;
        color: #3b91bc;
        border: solid 1px #3b91bc;
    }
    ${MediaTablet} {
        font-size: 16px;
    }
    ${MediaMobile} {
        font-size: 12px;
    }
`

function Filters({items, filterItems, selected}) {
    const allItems = ["Tous", ...items]

    
    
    return (
        <FilterContainer>
            {allItems.map(item => (
                <Filter onClick={() => filterItems(item)} key={item} className={selected === item ? "selected" : ""}>{item}</Filter>
            ))}

        </FilterContainer>
    )

}

export default Filters