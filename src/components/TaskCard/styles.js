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
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 10px;

    cursor: pointer;
    transition: all 0.3s ease-in-out;

    img {
        max-width: 35%;
    }
    
    &:hover {
        opacity: 0.5;
    }
    
`

export const TopCard = styled.div`
    display: flex;   
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        margin-top: 10px;
    }

`


export const BottomCard = styled.div`
    width: 100%;
    display: flex;   
    justify-content: space-around;
    margin-top: 15px;

    strong {
        color: ${cor.primaryColor};
        font-weight: bold;
    }

    

`


