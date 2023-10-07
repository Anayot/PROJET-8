import styled from "styled-components"

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const FormTitle = styled.h1`
    color: white;
    margin: 0;
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
`

const InputForm = styled.input`
    height: 30px;
    border: none;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
`

const TextareaForm = styled.textarea`
    border: none;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
    height: 80px;
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
`


function ContactForm() {
    return (
        <FormContainer>
            <FormTitle>Contactez-moi</FormTitle>  
            <FormLabels onSubmit={"submit"}>
                <LabelForm for="name">nom : </LabelForm>
                <InputForm type="text" name="name"/>

                <LabelForm for="email">email : </LabelForm>
                <InputForm type="email" name="email"/>

                <LabelForm for="message">messages : </LabelForm>
                <TextareaForm type="text" name="meassage"/>

                <ButtonForm type="submit">Envoyer</ButtonForm>
            </FormLabels>

        </FormContainer>
    )
}

export default ContactForm