import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from "./styles";
import {format} from 'date-fns';


import api from "../../services/api";

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from "../../utils/typeIcons";



function Task({match}) {

    const [type, setType] = useState();

    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [value, setValue] = useState();

    const [macaddress, setMacaddress] = useState('11-11-11-11-11-11');
    
    const [redirect, setRedirect] = useState(false);

  async function LoadTaskDetails(){
      await api.get(`https://check-to-do.herokuapp.com/task/${match.params.id}`)
      .then(response => {
        setType(response.data.type)
        setTitle(response.data.title)
        setDone(response.data.done)
        setDescription(response.data.description)
        setValue(response.data.value)
        setDate(format(new Date(response.data.when), 'yyyy-MM-dd' ))
        setHour(response.data.hora)
        // setHour(format(new Date(response.data.when), 'HH:mm' ))
      })
  }

  async function Save(){
      // Validação dos dados

    if(!title)
       return alert("Você precisa informar o nome!")
    else if(!description)
        return alert("Você precisa informar a descrição!")
    else if(!type)
        return alert("Você precisa selecionar um avatar!")
    else if(!value)
        return alert("Você precisa informar o valor!")       
    else if(!date)
        return alert("Você precisa informar a data!")    
    else if(!hour)
        return alert("Você precisa informar a hora!")                       
        


    if(match.params.id){
        await api.put(`https://check-to-do.herokuapp.com/task/${match.params.id}`, {
            macaddress,
            done,
            type,
            title,
            description,
            value,
            when: `${date}T${hour}:00.000`,
            hora: hour
        }).then(()=>
            setRedirect(true)
        )

        
    }else{
        await api.post('https://check-to-do.herokuapp.com/task', {
            macaddress,
            type,
            done,
            title,
            description,
            value,
            when: `${date}T${hour}:00.000`,
            hora: hour
        }).then(()=>
            setRedirect(true)
        )
    }

  }


  async function Remove(){
      const res = window.confirm('Are you sure you want to remove?');
      if(res == true){
        alert('Ok, vamos remover!')

        await api.delete(`https://check-to-do.herokuapp.com/task/${match.params.id}`)
            .then(() => setRedirect(true));
      }else{
        alert('Tudo bem, vamos manter!')
      }
  }



  useEffect(() => {
    LoadTaskDetails();
  }, [])

  return (
    <S.Container>
        {redirect && <Redirect to="/" />}
      <Header />

      <S.Form>
          <S.TypeIcons>
              {
                  typeIcons.map((icon, index) => (
                      index > 0 && 
                      <button type="button" onClick={() => setType(index)}>
                        <img src={icon} alt={icon} className={type && type !== index && 'inative'} />
                      </button>
                  ))
              }
          </S.TypeIcons>

          <S.Input>
              <span>Nome</span>
              <input type="text" placeholder="Nome" 
              onChange={e => setTitle(e.target.value)} value={title} />
          </S.Input>

          <S.TextArea>
              <span>Detalhes</span>
              <textarea rows={5} placeholder="Detalhes do Agendamento" 
              onChange={e => setDescription(e.target.value)} value={description} />
          </S.TextArea>

          <S.Input>
              <span>Data</span>
              <input type="date" placeholder="Data do Agendamento"
              onChange={e => setDate(e.target.value)} value={date} />
          </S.Input>

          <S.Input>
              <span>Hora</span>
              <input type="time" placeholder="Hora do Agendamento"
              onChange={e => setHour(e.target.value)} value={hour} />
          </S.Input>

          <S.Input>
              <span>Valor</span>
              <input type="text" placeholder="Valor do Agendamento"
              onChange={e => setValue(e.target.value)} value={value} />
          </S.Input>          

          <S.Options>
              <div>
                  <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                  <span>CONCLUÍDO</span>
              </div>
              { match.params.id && <button type="button" onClick={Remove}>EXCLUIR</button>}
          </S.Options>
          
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

export default Task;
