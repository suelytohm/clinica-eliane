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
import ClientsMenu from "../../components/ClientsMenu";




function Clientes(){

    const [clientes, setClientes] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);





    async function loadClients(){
        await api.get(`https://check-to-do.herokuapp.com/client`)
        .then(response => {
            setClientes(response.data);
        })
    }



    useEffect(() => {
        // loadClients();
        const loadClients = async () => {
            const response = await api.get(`https://check-to-do.herokuapp.com/client`);
            console.log(response.data);
            setClientes(response.data);
        }
        loadClients(); 
    }, [])



    const onChangeHandler = (text) => {
        let matches = [];
        if(text.length > 2) {
            matches = clientes.filter(clientes => {
                const regex = new RegExp(`${text}`, "gi");
                return clientes.name.match(regex)
            })

        }
        setSuggestions(matches);
        setText(text);
    }
    

    return (
        <S.Container>
            <Header />
            <S.Titulo>
                <h1>Clientes</h1>
            </S.Titulo>
            <S.Controles>

                <Link to={"/clientesCadastro"}>
                    <ClientsMenu title={"+ Cadastrar"} />
                </Link>

                <input type="text" placeholder="Pesquisar" 
                onChange={e => onChangeHandler(e.target.value)}
                value={text} />

            </S.Controles>
            <S.Content>
                {
                    suggestions && suggestions.map((c, i) => (
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