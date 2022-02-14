import React, { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
import * as S from "./styles";
import Qr from 'qrcode.react';
import cores from "../../components/cores";



import api from "../../services/api";

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import qrcode from 'qrcode.react';



function QrCode({match}) {

    let cor = cores();
    const [qCode, setQrcode] = useState("");
    const [message, setMessage] = useState("");
    

  async function LoadClientDetails(){
      await api.get(`http://localhost:3000/task/client/${match.params.id}`)
      .then(response => {
          console.log(response);
      })
  }

  async function NewInstanceWhats(){
      await api.get(`http://localhost:3000/novo/${match.params.id}`)
      .then(response => {

      })
  }

  
  async function LoadQrCode(){
    await api.get(`http://localhost:3000/qrcode`)
    .then(response => {
        console.log(response.data);
        if(response.data.code === "Aguarde, iniciando!")
            setMessage(response.data.code);
        else
            setQrcode(response.data.code);
    })
}

function pegarQrCode(){
    LoadQrCode();

}

  useEffect(() => {
    NewInstanceWhats();
    
  }, [])

  return (
    <S.Container>
        
      <Header />

      <S.Topo>
        <h1>QrCode</h1>
        <button type="button" onClick={pegarQrCode}>Atualizar</button>
            {
                message == "Aguarde, iniciando!" && qCode == "" &&
                <h2>{message}</h2>
            }
            {
                qCode != "" &&
                <S.qrc>
                    <Qr value={qCode} size={300} fgColor={cor.seccundaryColor}></Qr>
                </S.qrc>
            }
      </S.Topo>      
      <Footer />
    </S.Container>
  )
}

export default QrCode;
