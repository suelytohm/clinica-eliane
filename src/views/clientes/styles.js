import styled from "styled-components";
import cores from "../../components/cores/index"

let cor = cores();

export const Container = styled.div`
    width: 100%;
    
    
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;

    a {
        text-decoration: none;
        color: #000;
    }    
    
`

export const Controles = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }

    a:hover {
        color: #fff;
    }

    input {
        width: 250px;
        height: 50px;
        margin: 15px;
        padding: 10px;
        font-size: 15px;
        border-radius: 15px;
        border: 2px solid ${cor.seccundaryColor};

    }

`
export const Titulo = styled.div`
    margin: 30px;
`