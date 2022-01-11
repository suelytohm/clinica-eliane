import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import api from "../../services/api";

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from "../../utils/typeIcons";



function Task() {

    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();

  async function lateVerify(){
    await api.get(`https://check-to-do.herokuapp.com/task/filter/late/11-11-11-11-11-11`)
    .then(response => {
      setLateCount(response.data.length);
    })    
  }

  useEffect(() => {
    lateVerify();
  }, [])

  return (
    <S.Container>
      <Header lateCount={lateCount} />

      <S.Form>
          <S.TypeIcons>
              {
                  typeIcons.map((icon, index) => (
                      index > 0 && 
                      <button type="button" onClick={() => setType(index)}>
                        <img src={icon} alt={icon} className={type && type != index && 'inative'} />
                      </button>
                  ))
              }
          </S.TypeIcons>

          <S.Input>
              <span>Título</span>
              <input type="text" placeholder="Título da Tarefa"></input>
          </S.Input>

      </S.Form>

      <Footer />
    </S.Container>
  )
}

export default Task;
