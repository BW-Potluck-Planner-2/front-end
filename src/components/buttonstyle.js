import styled from "styled-components";

const Button = styled.button`
    margin: 1rem auto;
    padding: 2px 10px;
    background-color: #CBE2B0;
    border: 1px dashed black;
    border-radius: 12px;
    &:hover{
        background: green;
        color: white;
    }
`

export const LinkContianer = styled.div`
    margin: 1rem auto;
    padding: 2px 10px;
    background-color: #CBE2B0;
    border: 1px dashed black;
    border-radius: 12px;
    &:hover{
        background: green;
        box-shadow: 0 0 5px 2px green;
    }
`

export default Button;