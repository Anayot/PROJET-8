import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const CarrousselContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 315px;
    position: relative;
    border-radius: 5px; 
`

const ImageStyle = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`

const ChevronLeft = styled.div`
    position: absolute;
    font-size: 30px;
    cursor: pointer;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    & * {
        color: #a95757;
    }
`
const ChevronRight = styled.div`
    position: absolute;
    font-size: 30px;
    cursor: pointer;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    & * {
        color: #a95757;
    }
`

const arrowRight = <FontAwesomeIcon icon={faChevronRight} />
const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} />

function Caroussel() {
    

    return(
        <CarrousselContainer>
            <ImageStyle alt="Image du projet" src="" />
            <>
                <ChevronLeft>{arrowLeft}</ChevronLeft>
                <ChevronRight>{arrowRight}</ChevronRight>

            </>
        </CarrousselContainer>
    )
}

export default Caroussel