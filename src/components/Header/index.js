import React from 'react';
import * as S from "./styles";
import {Link} from "react-router-dom";

import logo from '../../assets/logo4.png';
import bell from '../../assets/bell2.png';


function Header({ lateCount, clickNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">Início</Link>
        <span className="dividir" />
        <Link to="/task">Agendamento</Link>
        <span className="dividir" />
        <a href="#">Sincronizar</a>
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
