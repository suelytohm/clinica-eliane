import React, { useState, useEffect, useMemo } from 'react';
import {Link} from 'react-router-dom';
import * as S from "./styles";
import api from "../../services/api";
import { format } from 'date-fns';

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';


function Home() {
  
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);

  let totalValor = 0;

  // https://check-to-do.herokuapp.com/
  async function loadTasks() {
    await api.get(`https://check-to-do.herokuapp.com/task/filter/${filterActived}/11-11-11-11-11-11`)
    .then(response => {
      setTasks(response.data);
    })
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
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived === "all"} onClick={() => setFilterActived("all")} />
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
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived === "year"} onClick={() => setFilterActived("year")} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h1>{filterActived === 'late' ? 'Agendamentos Atrasados' : 'Agendamentos'}</h1>
      </S.Title>

      <S.Content>
        {
          tasks.map(t => (
            <Link to={`/task/${t._id}`}>
              
              <TaskCard type={t.type} title={t.title} when={t.when} done={t.done} valor={t.value} hora={t.hora} description={t.description} />
            </Link>
          ))
        }
      </S.Content>


      <Footer />
    </S.Container>
  )
}

export default Home;
