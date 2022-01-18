import React from 'react';
import * as S from "./styles";

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import filterCard from '../../assets/filter.png';


function ClientsMenu({ title, actived }) {
  return (
    <S.Container actived={actived}>
        
      <h2>{title}</h2>
    </S.Container>

  )
}

export default ClientsMenu;
