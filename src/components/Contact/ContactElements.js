import styled from "styled-components";

export const Contact = styled.section`
    background: #3F72AF;
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

export const ContactForm = styled.form`
    background: #F9F7F7;
    border-radius: .6rem;
    width: 50%;
    margin: 0 auto;
`;

export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 4rem;
`;

export const ContactHeading = styled.div`
    margin-bottom: 3.5rem;
`;

export const ContactTitle = styled.span`
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 2.8rem;
    color: #112D4E;
`;

export const ContactSubTitle = styled.p`
    font-size: 1.4rem;
    width: 90%;
    color: #112D4E;
`;

export const ContactInputGroup = styled.div`
    width: 100%;
    margin-bottom: 1.4rem;
`;

export const ContactLabel = styled.label`
    display: block;
    font-size: 1.6rem;
    margin-bottom: .5rem;
`;

export const ContactInput = styled.input`
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: .1px solid #DBE2EF;
    width: 100%;
`;

export const ContactMessage = styled.textarea`
    width: 100%;
    border-radius: 0.5rem;
    border: .1px solid #DBE2EF;
`;