import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { MediaMobile, MediaTablet } from "../utils/style/GlobalStyle"

const CarrousselContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 315px;
    position: relative;
    border-radius: 5px;
    ${MediaMobile} {
        height: 200px;
        border-radius: 0;
    }
`

const ImageStyle = styled.img`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    border-radius: 5px;
    paddin
    ${MediaMobile} {
        object-fit: fill;
    }
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
    ${MediaTablet} {
        left: 0;
    }
    ${MediaMobile} {
        font-size: 20px;
        transform: translate(-120%);
        top: 46%;
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
    ${MediaTablet} {
        right: 0;
    }
    ${MediaMobile} {
        font-size: 20px;
        transform: translate(120%);
        top: 46%;
    }
`

const arrowRight = <FontAwesomeIcon icon={faChevronRight} />
const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} />

function Carrousel({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    if (pictures && pictures.length < 1) {
        return null
    }
    
    function goToPrevious() {
        setCurrentIndex( current => (current -1 + pictures.length) % pictures.length)
    }

    function goToNext() {
        setCurrentIndex( current => (current +1 + pictures.length) % pictures.length)
    }
    

    return(
        <CarrousselContainer>
            <ImageStyle src={pictures[currentIndex]} alt="Image du projet" />
            {pictures.length > 1 && (
            <>
                <ChevronLeft onClick={goToPrevious}>{arrowLeft}</ChevronLeft>
                <ChevronRight onClick={goToNext}>{arrowRight}</ChevronRight>

            </>)}
        </CarrousselContainer>
    )
}

export default Carrousel