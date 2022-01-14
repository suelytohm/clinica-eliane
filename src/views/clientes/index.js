import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from "./styles";
import {format} from 'date-fns';


import api from "../../services/api";

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from "../../utils/typeIcons";



function Clientes(){

    return (
        <S.Container>
            <Header />
                <h1>Clientes</h1>
            <Footer />
        </S.Container>
    )
}

export default Clientes;