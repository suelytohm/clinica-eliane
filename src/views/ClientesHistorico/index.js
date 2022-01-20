import React, { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
import * as S from "./styles";
import {format} from 'date-fns';


import api from "../../services/api";

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import taskCard from "../../components/TaskCard";
import typeIcons from "../../utils/typeIcons";




function ClientesHistorico({match}) {

    const [id, setId] = useState();
    const [type, setType] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [phone, setPhone] = useState();
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [niver, setNiver] = useState();

    const [macaddress, setMacaddress] = useState('11-11-11-11-11-11');
    const [redirect, setRedirect] = useState(false);

  async function LoadClientDetails(){
      await api.get(`http://localhost:3000/task/client/${match.params.id}`)
      .then(response => {

          console.log(response);

          


        // setNiver(format(new Date(response.data.niver), 'yyyy-MM-dd' ))
        // setHour(response.data.hora)
        // setHour(format(new Date(response.data.when), 'HH:mm' ))
      })
  }

  

  useEffect(() => {
    LoadClientDetails();
  }, [])

  return (
    <S.Container>
        {redirect && <Redirect to="/clientes" />}
      <Header />

      <S.Topo>
        <h1>Histórico</h1>
        <h1>{match.params.name}</h1>
        {
            match.params.id &&
            <Link to={`/clientes/historico/${match.params.id}`}>
                <button type="button">Histórico</button>
            </Link>
        }
      </S.Topo>


      
      <Footer />
    </S.Container>
  )
}

export default ClientesHistorico;
