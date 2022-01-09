import styled from "styled-components";
import cores from "../cores/index";



var cor = cores();

export const Container = styled.div`
    width: 250px;
    height: 60px;
    background: ${props=> props.actived ? cor.primaryColor : cor.seccundaryColor };
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    
    
    display: flex;
    flex-direction: column;
    justify-content:space-around;


    img {
        width: 25px;
        height: 25px;
    }

    span { 
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size:18px;
    }
    
    &:hover {
        background: ${ cor.primaryColor };
    }

`

