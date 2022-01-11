import styled from "styled-components";
import cores from "../../components/cores/index"

let cor = cores();

export const Container = styled.div`
    width: 100%;
    
    
`


export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;

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