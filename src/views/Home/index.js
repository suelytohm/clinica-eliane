import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import * as S from "./styles";
import api from "../../services/api";

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';


function Home() {
  
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  let mes = "";
  let mesAntes = "";
  let contador = 6;


  // https://check-to-do.herokuapp.com/
  async function loadTasks() {
    await api.get(`https://check-to-do.herokuapp.com/task/filter/${filterActived}/11-11-11-11-11-11`)
    .then(response => {
      setTasks(response.data);
    })
  }

  function getMes(when){
    let date = new Date(when);
    mesAntes = mes;
    mes = date.getMonth()+1;

    if(mesAntes !== mes){
      contador = 0;
    }


    if(mes === 1)
      mes = "Janeiro"
    else if(mes === 2)
      mes = "Fevereiro"
    else if(mes === 3)
      mes = "Março"
    else if(mes === 4)
      mes = "Abril"
    else if(mes === 5)
      mes = "Maio"
    else if(mes === 6)
      mes = "Junho"
    else if(mes === 7)
      mes = "Julho"
    else if(mes === 8)
      mes = "Agosto"
    else if(mes === 9)
      mes = "Setembro"
    else if(mes === 10)
      mes = "Outubro"
    else if(mes === 11)
      mes = "Novembro"
    else if(mes === 12)
      mes = "Dezembro"      
    return mes;
  }

  function Notification(){
    setFilterActived('late');

  }


  useEffect(() => {
    loadTasks();
  }, [filterActived])

  return (
    <S.Container>
      <Header clickNotification={Notification} />

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Todos" actived={filterActived === "year"} onClick={() => setFilterActived("year")} />
        </button>

        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived === "today"} onClick={() => setFilterActived("today")} />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived === "week"} onClick={() => setFilterActived("week")} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived === "month"} onClick={() => setFilterActived("month")} />
        </button>

      </S.FilterArea>

      <S.Title>
        <h1>{filterActived === 'late' ? 'Agendamentos Atrasados' : 'Agendamentos'}</h1>
      </S.Title>

      <S.Content>
        {
          tasks.map(t => (
            <>
              {
                filterActived === 'year' &&
                getMes(t.when) &&
                mesAntes !== mes &&
                
                <S.TituloSeparador>
                  <h2 key={t._id}>{mes}</h2>
                </S.TituloSeparador>
              }
            <Link to={`/task/${t._id}`}>
              <TaskCard key={t._id} type={t.type} title={t.title} when={t.when} done={t.done} valor={t.value} hora={t.hora} description={t.description} />
            </Link>
            </>
          ))
        }
      </S.Content>


      <Footer />
    </S.Container>
  )
}

export default Home;
