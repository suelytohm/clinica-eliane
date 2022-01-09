import React from 'react';
import * as S from "./styles";

import logo from '../../assets/logo3.png';
import bell from '../../assets/bell.png';


function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <a href="#">Início</a>
        <span className="dividir" />
        <a href="#">Clientes</a>
        <span className="dividir" />
        <a href="#">Sincronizar</a>
        <span className="dividir" />
        <a href="#" id="notification">
          <img src={bell} alt="Notificação" />
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>

  )
}

export default Header;
