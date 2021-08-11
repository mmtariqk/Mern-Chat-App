

import styled from "styled-components";

const primary = "#3e1306" // light Pink
const secondary = "#f0cccc" // beige

export const SignContainer = styled.div`

    display: flex;
    justify-content: center;
    padding-top: 10%;


    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

`;

export const Form = styled.form`
    padding-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ContactSheet = styled.div`
    height: 420px;
    width: 100%;
    background-color: ${secondary};
    display: flex;
    justify-content: center;
`;

export const ContactWrapper = styled.div`
    margin: 30px;
`;

export const InputContainer = styled.div`
    width: 100%;
    padding-right: 5px;
`;

export const Input = styled.input`
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    border-bottom-color: ${primary};
`;

export const Textarea = styled.textarea`
    width: 98%;
    outline: none;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-color: ${primary};
`;