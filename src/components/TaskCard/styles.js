import styled from "styled-components";
import cores from "../cores/index";

var cor = cores();

export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: 7px 7px 21px -5px rgba(0,0,0,0.75);
    border-radius: 35px;

    
    display: flex;   
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        opacity: 0.5;
    }
    
`

export const TopCard = styled.div`
    display: flex;   
    align-items: center;
    justify-content: center;
    flex-direction: column;

`


export const BottomCard = styled.div`
    width: 100%;
    display: flex;   
    justify-content: space-around;

    strong {
        color: ${cor.primaryColor};
        font-weight: bold;
    }

    span { color: ${cor.cinza}}

`


