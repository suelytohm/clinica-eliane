import styled from "styled-components";
import cores from "../cores/index";

var cor = cores();

export const Container = styled.div`

    width: 250px;
    min-height: 250px;
    height: auto;
    box-shadow: 7px 7px 21px -5px rgba(0,0,0,0.75);
    border-radius: 35px;
    padding: 20px;
    padding-top: 30px;

    
    display: flex;   
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    opacity: ${props => props.done ? 0.8 : 1};
    background: ${props => props.done ? cor.success : cor.seccundaryColor};
    color: ${props => props.done ? cor.branco : '#fff'};


    img {
        max-width: 25%;
        display: flex;   
        align-items: center;

        justify-content: center;
        flex-direction: column;
    }
    
    &:hover {
        opacity: 0.5;
        
    }
    

`

export const TopCard = styled.div`

`


export const BottomCard = styled.div`

`