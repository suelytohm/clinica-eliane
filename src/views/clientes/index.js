import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import * as S from "./styles";
import {format} from 'date-fns';


import api from "../../services/api";

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from "../../utils/typeIcons";
import ClientsCard from "../../components/ClientsCard";



function Clientes(){

    const [clientes, setClientes] = useState([]);



    async function loadClients(){
        await api.get(`https://check-to-do.herokuapp.com/client`)
        .then(response => {
            setClientes(response.data);
        })
    }



    useEffect(() => {
        loadClients();
    })


    return (
        <S.Container>
            <Header />
            <S.Controles>
                <h1>Clientes</h1>

            </S.Controles>
            <S.Content>

                {
                    clientes.map(c => (
                        <Link to={`clientes/${c._id}`}>
                            <ClientsCard nome={c.name} type={c.type} description={c.description} phone={c.phone} rua={c.rua} numero={c.numero} bairro={c.bairro} cidade={c.cidade} estado={c.estado} />
                        </Link>
                    ))
                }
            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default Clientes;