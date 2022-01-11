import styled from "styled-components";
import cores from "../../components/cores/index"

let cor = cores();

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`

export const Form = styled.div`
    width: 80%;

`

export const TypeIcons = styled.div`

    width: 100%;
    justify-content: center;


    .inative {
        opacity: 0.5;
    }

    button {
        background: none;
        border: none;
    }

    img {
        max-width: 50px;
        margin: 15px;
        cursor: pointer;

    }
`

export const Input = styled.div``