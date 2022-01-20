import styled from "styled-components";
import cores from "../cores/index";

var cor = cores();


export const Container = styled.div`
    width: 100%;
    height:50px;
    background: ${cor.primaryColor}; 
    display: flex;
    position: fixed;
    bottom: 0;
    border-top: 5px solid ${cor.seccundaryColor}; 
    align-items: center;
    justify-content: center;

    span{
        color: #FFF;
    }

    img {
        width: 150px;
    }

`

// #EE6B26;
//  #20295F;