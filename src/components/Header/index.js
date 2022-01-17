import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import {Link} from "react-router-dom";

import logo from '../../assets/logo4.png';
import bell from '../../assets/bell2.png';

import api from '../../services/api';

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();



  async function lateVerify(){
    await api.get(`https://check-to-do.herokuapp.com/task/filter/late/11-11-11-11-11-11`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify();
  })

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">Início</Link>
        <span className="dividir" />
        <Link to="/task">Agendar</Link>
        <span className="dividir" />
        <Link to="/clientes">Clientes</Link>
        <span className="dividir" />
        <button id="notification" onClick={clickNotification}>
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>

  )
}

export default Header;
