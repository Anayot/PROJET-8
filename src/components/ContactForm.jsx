import styled from "styled-components"
import { MediaMobile, MediaTablet } from "../utils/style/GlobalStyle"
import { useState } from "react"


const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const FormTitle = styled.h1`
    color: white;
    margin: 0;
    ${MediaTablet} {
        font-size: 26px;
    }
    ${MediaMobile} {
        font-size: 22px;
    }
`

const FormLabels = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 150%;
`

const LabelForm = styled.label`
    color: white;
    margin: 30px 0 10px 0;
    ${MediaTablet} {
        font-size: 16px;
        margin: 15px 0 5px 0;
    }
    ${MediaMobile} {
        font-size: 14px;
        margin: 15px 0 5px 0;
    }
`

const InputForm = styled.input`
    height: 30px;
    border: none;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
    ${MediaMobile} {
        height: 20px;
    }
`

const TextareaForm = styled.textarea`
    border: none;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
    height: 80px;
    ${MediaMobile} {
        height: 50px;
    }
`

const ButtonForm = styled.button`
    background-color: #f3cf55;
    border-radius: 50px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin: 30px auto;
    padding: 5px 20px;
    text-align: center;
    border: none;
    ${MediaMobile} {
        font-size: 14px
    }

`


function ContactForm() {


    return (
        <FormContainer id="contact">
            <FormTitle>Contactez-moi</FormTitle>  
            <FormLabels >
                <input type="hidden" name="form-name" value="contact" />
                <LabelForm htmlFor="name">nom : </LabelForm>
                <InputForm type="text" name="name"/>

                <LabelForm htmlFor="email">email : </LabelForm>
                <InputForm type="email" name="email"/>

                <LabelForm htmlFor="message">messages : </LabelForm>
                <TextareaForm type="text" name="meassage"/>

                <ButtonForm type="submit">Envoyer</ButtonForm>
            </FormLabels>

        </FormContainer>
    )
}

export default ContactForm