import React, { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
import * as S from "./styles";
import {format} from 'date-fns';


import api from "../../services/api";

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from "../../utils/typeIcons";



function ClientesCadastro({match}) {

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


    if(match.params.id){
      await api.get(`https://check-to-do.herokuapp.com/client/${match.params.id}`)
      .then(response => {
        setType(response.data.type)
        setName(response.data.name)
        setDescription(response.data.description)
        setPhone(response.data.phone)
        setRua(response.data.rua)
        setNumero(response.data.numero)
        setBairro(response.data.bairro)
        setCidade(response.data.cidade)
        setEstado(response.data.estado)
        setNiver(response.data.niver)

        // setNiver(format(new Date(response.data.niver), 'yyyy-MM-dd' ))
        // setHour(response.data.hora)
        // setHour(format(new Date(response.data.when), 'HH:mm' ))
      })
    }
  }

  async function Save(){
      // Validação dos dados

    if(!name)
       return alert("Você precisa informar o nome!")
    else if(!description)
        return alert("Você precisa informar a descrição!")
    else if(!type)
        return alert("Você precisa selecionar um avatar!")


    if(match.params.id){
        await api.put(`https://check-to-do.herokuapp.com/client/${match.params.id}`, {
            macaddress,
            type,
            name,
            description,
            phone,
            rua,
            bairro,
            numero,
            cidade,
            estado,
            niver            
        }).then(()=>
            setRedirect(true)
        )

        
    }else{
        await api.post('https://check-to-do.herokuapp.com/client', {
            macaddress,
            type,
            name,
            description,
            phone,
            rua,
            bairro,
            numero,
            cidade,
            estado,
            niver
        }).then(()=>
            setRedirect(true)
        )
    }

  }


  useEffect(() => {
    LoadClientDetails();
  }, [])

  return (
    <S.Container>
        {redirect && <Redirect to="/clientes" />}
      <Header />

      <S.Topo>
        <h1>Dados do Cliente</h1>
        {
            match.params.id &&
            <Link to={`/clientes/historico/${match.params.id}`}>
                <button type="button">Histórico</button>
            </Link>
        }
      </S.Topo>
      <S.Form>
          <p>Avatar:</p>
          <S.TypeIcons>
              {
                  typeIcons.map((icon, index) => (
                      index > 0 && 
                      <button type="button" onClick={() => setType(index)}>
                        <img key={index} src={icon} alt={icon} className={type && type !== index && 'inative'} />
                      </button>
                  ))
              }
          </S.TypeIcons>

          <S.Input>
              <span>Nome</span>
              <input type="text" placeholder="Nome" 
              onChange={e => setName(e.target.value)} value={name} />
          </S.Input>

          <S.TextArea>
              <span>Detalhes</span>
              <textarea rows={5} placeholder="Observações" 
              onChange={e => setDescription(e.target.value)} value={description} />
          </S.TextArea>

          <S.Input>
              <span>Nascimento</span>
              <input type="date" placeholder="Data do Nascimento"
              onChange={e => setNiver(e.target.value)} value={niver} />
          </S.Input>

          <S.Input>
              <span>Telefone</span>
              <input type="text" placeholder="Número"
              onChange={e => setPhone(e.target.value)} value={phone} />
          </S.Input>      












          <S.Input>
              <span>Rua</span>
              <input type="text" placeholder="Rua" 
              onChange={e => setRua(e.target.value)} value={rua} />
          </S.Input>

          <S.Input>
              <span>Número</span>
              <input type="number" placeholder="Número" 
              onChange={e => setNumero(e.target.value)} value={numero} />
          </S.Input>

          <S.Input>
              <span>Bairro</span>
              <input type="text" placeholder="Bairro" 
              onChange={e => setBairro(e.target.value)} value={bairro} />
          </S.Input>

          <S.Input>
              <span>Cidade</span>
              <input type="text" placeholder="Cidade" 
              onChange={e => setCidade(e.target.value)} value={cidade} />
          </S.Input>

          <S.Input>
              <span>Estado</span>
              <input type="text" placeholder="Estado" 
              onChange={e => setEstado(e.target.value)} value={estado} />
          </S.Input>




          
          <S.Save>
              <button type="button" onClick={Save}>
                  SALVAR
              </button>

          </S.Save>

      </S.Form>

      <Footer />
    </S.Container>
  )
}

export default ClientesCadastro;
