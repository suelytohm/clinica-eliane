import styled from "styled-components";
import cores from "../../components/cores/index"

let cor = cores();

export const Container = styled.div`
    width: 100%;
    
    
`


export const FilterArea = styled.div`
    display: flex;
    text-align: center;
    flex-wrap: row;
    margin-top: 30px;
    align-items: center;
    justify-content: center;

    button {
        background: none;
        border: none;
    }

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

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid ${cor.seccundaryColor};
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    h1 {
        color: ${cor.seccundaryColor};
        position: relative;
        top: 38px;
        background: ${cor.branco};
        padding: 0 20px;
        
    }

`
export const TituloSeparador = styled.div`
    width: 90%;
    border-bottom: 1px solid ${cor.seccundaryColor};;
    margin: 25px;
    color: ${cor.seccundaryColor};
`
