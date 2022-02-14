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

export const qrc = styled.div`
    max-width: 80%;
    margin: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    button {
        margin: 50px;
    }

`

export const Form = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;

    p{
        margin-left: 15px;
    }
    
`

export const Topo = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;

    button {
        width: 100%;
        height: 50px;
        background: ${cor.primaryColor};
        color: ${cor.branco};
        border-radius: 30px;
        font-size: 18px;
        box-shadow: 7px 7px 21px -5px rgba(0,0,0,0.75);
        border: none;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    
`

export const TypeIcons = styled.div`

    width: 100%;
    justify-content: center;
    text-align: center;


    .inative {
        opacity: 0.2;
    }

    button {
        background: none;
        border: none;
    }

    img {
        max-width: 40px;
        margin: 5px;
        cursor: pointer;

    }
`

export const Input = styled.div`
    max-width: 85%;
    display: flex;
    flex-direction: column;
    margin: 15px;

    span {
        color: #707070;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        padding: 15px;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid ${cor.seccundaryColor};
    }
    
`

export const TextArea = styled.div`
    max-width: 90%;
    display: flex;
    flex-direction: column;
    margin: 15px;

    span {
        color: #707070;
        margin-bottom: 5px;
    }   
    
    textarea {
        width: 90%;
        padding: 15px;
        font-size: 16px;
        border: none;
        border: 1px solid ${cor.seccundaryColor};
    }    

`

export const Options = styled.div`
    margin: 25px;
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        color: ${cor.seccundaryColor};
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }


    div {
        display: flex;
        align-items: center;
        color: ${cor.seccundaryColor};
        font-size: 
    }

`

export const Save = styled.div`
    margin: 15px;
    margin-top: 25px;
    width: 90%;

    button {
        width: 100%;
        background: ${cor.primaryColor};
        border: none;
        font-size: 20px;
        color: ${cor.branco};
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        margin-bottom: 50px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

    }

`