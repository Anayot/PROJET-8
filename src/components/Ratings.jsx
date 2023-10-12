import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { MediaMobile } from '../utils/style/GlobalStyle'

const StarRate  = styled.div`
    display: flex;
    gap: 4px;
`

const FullStar = styled(FontAwesomeIcon)`
    font-size: 22px;
    color: #f3cf55;
    ${MediaMobile} {
        font-size: 14px;
    }
`

function Ratings({rating}) {
    const values = [1, 2, 3, 4, 5]

    return(
        <StarRate>
        {values.map((value) => {
            return rating >= value ? (
                <FullStar icon={faStar} key={value}/> 
            ) : (
                false
            )
            }
        )}
            
        </StarRate>
    )

}

export default Ratings